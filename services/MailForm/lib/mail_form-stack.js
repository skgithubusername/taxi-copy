const { Stack, Duration } = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigw = require('aws-cdk-lib/aws-apigateway')
const { Cors } = require('aws-cdk-lib/aws-apigateway')

class TaxiMailFormStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const fn = new lambda.Function(this, 'MailFormFunctin', {
      code: new lambda.AssetCode('src'),
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: Duration.seconds(5),
      handler: 'index.handler',
      environment : {
        SMTP_PASSWORD: process.env.SMTP_PASSWORD
      },
    });
    
    const endpoint = new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: fn,
      restApiName: "FormMail",
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      }
    })
  }
}

module.exports = { TaxiMailFormStack }
