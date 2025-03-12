// components/BackgroundImageSection.js
import React from 'react';
import styles from './BackgroundImageSection.module.css';

const BackgroundImageSection = ({ imageSrc, children }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundImageSection;
