// Card.jsx
import React from "react";
import styles from "./card.module.css";
import { caps } from "../../data/caps";
import Link from "next/link";
import Chapter from "./Chapter";
import useMediaQuery from '@mui/material/useMediaQuery'

const MediaQueryComponent = () => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const isMobile = useMediaQuery('(max-width:800px)');

  return { isDesktop, isMobile };
};

const Card = () => {

  const { isDesktop, isMobile } = MediaQueryComponent();

  return (
    <div className={styles.container}>
      {isDesktop && (

        <div className={styles.caps}>
          {caps.map((item) => (
            <Link href={`/chapters/${item.id}`} className={styles.link} key={item.id}>
              <Chapter title={item.title} subtitle={item.subtitle} />
            </Link>
          ))}
        </div>
      )}
      {isMobile && (
        <div className={styles.capsMobile}>
          {caps.map((item) => (
            <Link href={`/chapters/${item.id}`} className={styles.link} key={item.id}>
              <Chapter title={item.title} subtitle={item.subtitle} />
            </Link>
          ))}
        </div>
      )
      }
    </div>
  );
};

export default Card;
