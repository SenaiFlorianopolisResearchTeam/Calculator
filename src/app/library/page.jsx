'use client'
import React from 'react';
import styles from './page.module.css'
import Card from '@/components/card/Card'
import useMediaQuery from '@mui/material/useMediaQuery'

const MediaQueryComponent = () => {
  const isMobile = useMediaQuery('(max-width:800px)');

  return { isMobile };
};

const Library = () => {

  const { isMobile } = MediaQueryComponent();

  return (
    <div className={styles.container}>
      {isMobile ? (
        <h2 className={styles.titleMobile}>Biblioteca Virtual</h2> ) :
        (<h1 className={styles.title}>Biblioteca Virtual</h1>)
      }
      <Card />
    </div>
  )
}

export default Library