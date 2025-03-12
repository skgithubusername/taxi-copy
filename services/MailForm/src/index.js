const nodemailer = require('nodemailer');

const configOptions = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "neomanishchourasiya@gmail.com",
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    }
}

const transporter = nodemailer.createTransport(configOptions)


exports.handler = async (event) => {
    try {
        const { body } = event;
        const data = JSON.parse(body)

        const { name, contact, email = "Not Provided", service, message } = data

        // const toMails = '<xploroo5@gmail.com>'
        // const toMailsBcc = '<xploroo5@gmail.com>'

        const toMails = '<xploroo5@gmail.com>'
        const toMailsBcc = '<xploroo5@gmail.com>'

        // data to send to user 
        /*
        {
          "name": "name client",
          "contact": "+91 1234567890",
          "email": "sch@example.com",
          "service": "new product"
          "message": "neccessary info"
        }
        */
        const textBody = `
    Name: ${name}
    Contact Number: ${contact}
    Email: ${email}
    Service: ${service}
    Message: ${message}
    `;

        const htmlBody = `
    <h2>Lead Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Contact Number:</strong> ${contact}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

        console.log("sending mail back");

        console.log(textBody + "/n"+ toMails)
        const info = await transporter.sendMail({
            from: '"Lead Notification" <neomanishchourasiya@gmail.com>',
            to: toMails,
            bcc: toMailsBcc,
            subject: "Form submission lead website",
            text: textBody,
            html: htmlBody,
        });
        console.log("mail sent");
        // https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html
        const response = {
            "data": data,
            "message": "mail sent",
            "messageId": info.messageId
        };
        return {
            body: JSON.stringify(response, null, 2),
            headers: {
                "Access-Control-Allow-Headers" : "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            statusCode: 200,
        };

    } catch (error) {
        console.error("Error sending email:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to send email", error: error.message }),
        };
    };
};