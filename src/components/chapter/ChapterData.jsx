import React from 'react';
import styles from './chapter.module.css'

const ChapterData = ({ title, subtitle, paragraphs }) => {

  return (
    <div className={styles.ChapterContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>  
        <div  className={styles.ChapterCard}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.text}>
            {paragraph}
          </p>
        ))}
        </div>
    </div>
  );
};

export default ChapterData;
