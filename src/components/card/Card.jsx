"use client";
import React from "react";
import styles from "./card.module.css";
import Chapter from "./Chapter";
import { caps } from "../../data/caps";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.caps}>
      {caps.map((item) => (
          <Chapter
            id={item.id}
            caps={caps}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
