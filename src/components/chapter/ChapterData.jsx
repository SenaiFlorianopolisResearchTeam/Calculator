import React from 'react';
import styles from './chapter.module.css'

const ChapterData = ({ title, subtitle, paragraphs }) => {

  return (
    <div className={styles.card}>
        <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>  
        <p className={styles.text}>{paragraphs}</p>  
        </div>
    </div>
  );
};

export default ChapterData;
