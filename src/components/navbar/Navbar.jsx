'use client'

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from "next/image"
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { links } from './links'

const Navbar = () => {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawer = (
    <Box
      className={styles.drawer}
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    >
      <Link href="/" className={styles.logoMobile}>
        <Image src="/logo.svg" width={90} height={90} alt="Logo" />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </Box>
  );

  const isDesktop = useMediaQuery('(min-width:800px)')
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
    <div className={styles.container}>

      {isDesktop && (
        <>
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

        </>
      )}

      {isMobile && (
        <>
          <div className='nav-mobile'>
            <Button onClick={toggleDrawer('right', true)} color='secondary' >
              <MenuIcon
                sx={{ fontSize: 33, marginLeft: '100%' }}
              />
            </Button>

            <SwipeableDrawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer('right', false)}
              onOpen={toggleDrawer('right', true)}
            >
              {drawer}
            </SwipeableDrawer>
          </div>
          

        </>
      )}

    </div>
  )
}

export default Navbar