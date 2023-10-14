"use client";
import React from "react";
import styles from "./card.module.css";
import Chapter from "./Chapter";
import { caps } from "../../data/caps";
import Link from 'next/link';

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.caps}>
      {caps.map((item) => (
          <Link href={`/chapters/${item.id}`} className={styles.link}>
            <Chapter
              id={item.id}
              caps={caps}
              title={item.title}
              subtitle={item.subtitle}
            />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
