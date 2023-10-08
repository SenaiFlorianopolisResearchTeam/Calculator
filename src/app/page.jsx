import Image from 'next/image'
import styles from './page.module.css'
import Imagem from "../../public/foguete.svg"
import Link from 'next/link';
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
     
      <img src={Logo} className="logo-mobile" style={{ display: 'none' }} />
      
        <h1 className={styles.title}>
          Iniciação Científica
        </h1>
        <p className={styles.desc}>
          Grupo de Iniciação Científica de Florianópolis, Santa Catarina Buscando soluções sonoras para a sociedade de forma acessível.
        </p>
        <Link href={'/about'}>
        <button className={styles.button}>Saiba mais <span className={styles.arrow}>▶</span></button>
        </Link>
      </div>
      <div className={styles.item}>
        <Image src={Imagem} alt="foguete" className={styles.img} /> 
      </div>
    </div>
  )
}
