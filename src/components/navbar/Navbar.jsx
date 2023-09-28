'use client'

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from "next/image"

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Sobre',
    url: '/about',
  },
  {
    id: 3,
    title: 'Biblioteca',
    url: '/library',
  },
  {
    id: 4,
    title: 'Calculadora',
    url: '/calculator',
  },
  {
    id: 4,
    title: 'Contato',
    url: '/contact',
  },

]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" width={130} height={130} alt="Logo" />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar