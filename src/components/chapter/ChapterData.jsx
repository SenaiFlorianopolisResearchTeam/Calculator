import React from 'react';
import styles from './chapter.module.css'

const ChapterData = ({ title, subtitle, paragraphs }) => {

  return (
    <div className={styles.ChapterContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>  
        <div  className={styles.ChapterCard}>
        <p className={styles.text}>{paragraphs}</p>  
        </div>
    </div>
  );
};

export default ChapterData;
