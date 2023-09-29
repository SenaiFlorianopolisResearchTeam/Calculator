import React from 'react';
import Link from 'next/link';
import styles from './card.module.css'


const Chapter = ({ caps, title, subtitle, url }) => {

  return (
    <div className={styles.card}>
        <Link href={url}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>  
        </Link>
    </div>
  );
};

export default Chapter;
