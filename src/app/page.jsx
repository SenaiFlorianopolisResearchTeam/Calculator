import Image from 'next/image'
import styles from './page.module.css'
//import LocalPossivelImagem from "public/LocalPossivelImagem.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Iniciação Científica
        </h1>
        <p className={styles.desc}>
          Grupo de Iniciação Científica de Florianópolis, Santa Catarina Buscando soluções sonoras para a sociedade de forma acessível.
        </p>
        <button className={styles.button}>Saiba mais <span className={styles.arrow}>→</span></button>
      </div>
      <div className={styles.item}>
        {/* <Image src={LocalPossivelImagem} alt="LocalPossivelImagem" className={styles.img} /> */}
      </div>
    </div>
  )
}
