import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import Ana from '../../../public/anabe.png'
import Yuri from '../../../public/yuri.png'
import Isa from '../../../public/isa.png'
import Linkedin from '../../../public/Linkedin.svg'
import Github from '../../../public/Github.svg'

const Contact = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contato</h1>

    <div className={styles.container}>
      <div className={styles.member}>
        <Image className={styles.image} src={Ana}/>
        <h3>Ana Beatriz Martins</h3>
      <div className={styles.div}>
        <a href='https://www.linkedin.com/in/anabe-sc/'>
          <Image className={styles.social} src={Linkedin}/>
        </a>
        <a href='https://github.com/anabmartins'>
          <Image className={styles.social} src={Github}/>
        </a>
        </div>
      </div>

      <div className={styles.member}>
        <Image className={styles.image} src={Yuri}/>
        <h3>Yuri Castilho</h3>
        <div className={styles.div}>
        <a href='https://www.linkedin.com/in/yuri-castilhoo/'>
        <Image className={styles.social} src={Linkedin}/>
        </a>
        <a href='https://github.com/YuriCast'>
          <Image className={styles.social} src={Github}/>
        </a>
      </div>
      </div>

      <div className={styles.member}>
        <Image className={styles.image} src={Isa}/>
        <h3>Isadora Wenzel</h3>
        <div className={styles.div}>
        <a href='https://www.linkedin.com/in/isadora-ws/'>
          <Image className={styles.social} src={Linkedin}/>
        </a>
        <a href='https://github.com/isaws06'>
          <Image className={styles.social} src={Github}/>
        </a>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Contact