// components/BackgroundVideoSection.js
import React from 'react';
import styles from './BackgroundVideoSection.module.css';

const BackgroundVideoSection = ({ videoSrc, text }) => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <p className='text-white text-center text-4xl md:text-7xl w-2/4 leading-snug'>{text}</p>
      </div>
    </div>
  );
};

export default BackgroundVideoSection;
 