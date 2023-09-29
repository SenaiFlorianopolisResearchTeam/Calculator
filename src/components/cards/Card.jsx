'use client'

import React from 'react'
import Link from 'next/link'
import styles from './card.module.css'
import Chapter from './Chapter'; 

const caps = [
  {
    id: 1,
    title: 'Capítulo 1',
    subtitle: 'Som e Ruído',
    url: '/cap1',
  },
  {
    id: 2,
    title: 'Capítulo 2',
    subtitle: 'Natureza do Som',
    url: '/cap2',
  },
  {
    id: 3,
    title: 'Capítulo 3',
    subtitle: 'Onda sonora Plana',
    url: '/cap3',
  },
  {
    id: 4,
    title: 'Capítulo 4',
    subtitle: 'Onda sonora Esférica',
    url: '/cap4',
  },
  {
    id: 5,
    title: 'Capítulo 5',
    subtitle: 'Forma da Onda',
    url: '/cap5',
  },
  {
    id: 6,
    title: 'Capítulo 6',
    subtitle: 'Impedância característica',
    url: '/cap6',
  },
  {
    id: 7,
    title: 'Capítulo 7',
    subtitle: 'Intensidade Sonora',
    url: '/cap7',
  },
  {
    id: 8,
    title: 'Capítulo 8',
    subtitle: 'Potência Sonora',
    url: '/cap8',
  },

]

const Card = () => {
    return (
        <div className={styles.container}>
          <div className={styles.caps}>
            {caps.map((cap) => (
              <Chapter key={cap.id} title={cap.title} subtitle={cap.subtitle} url={cap.url} />
            ))}
          </div>
        </div>
      );
  }
  

export default Card