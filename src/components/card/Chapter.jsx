import React from 'react';
import styles from './card.module.css'

const Chapter = ({ title, subtitle }) => {

  return (
    <div className={styles.card}>
        <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>  
        </div>
    </div>
  );
};

export default Chapter;
