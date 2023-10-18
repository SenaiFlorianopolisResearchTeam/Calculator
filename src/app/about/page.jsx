'use client'
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Grupo from "../../../public/group.png";
import Imagem from "../../../public/lamp.svg";
import Project from "@/components/project/Project";
import useMediaQuery from '@mui/material/useMediaQuery'
import Scroll from "@/components/scrollTop/scroll";

const MediaQueryComponent = () => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const isMobile = useMediaQuery('(max-width:800px)');

  return { isDesktop, isMobile };
};

const About = () => {

  const { isDesktop, isMobile } = MediaQueryComponent();

  return (
    <>
      {isDesktop && (

        <div className={styles.main}>
          <div className={styles.container1}>
            <div className={styles.item1}>
              <Image src={Imagem} alt="cubos" className={styles.img} />
            </div>
            <div className={styles.item1}>
              <h1 className={styles.title}>O que é a Iniciação Científica?</h1>
              <p className={styles.desc}>
                É um projeto organizado pela direção regional. São 10 grupos na
                Escola SESI, 3 Grupos na regional Sudeste e 15 estudantes por
                projeto.
              </p>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.item2}>
              <h1 className={styles.title}>Missão</h1>
              <p className={styles.desc}>
                Incentivar e desenvolver o protagonismo juvenil por meio da pesquisa
                para promover uma cultura científica e tecnológica.
              </p>
            </div>
            <div className={styles.item2}>
              <h1 className={styles.title}>Valores</h1>
              <p className={styles.desc}>
                Posicionar nacionalmente a Escola SESI como formadora de excelência
                em perspectivas científicas e tecnológicas em todas as áreas do
                conhecimento.
              </p>
            </div>
            <div className={styles.item3}>

              <h1 className={styles.title}>Organização</h1>
              <ul className={styles.desc}>
                <li>5 grupos com 3 estudantes.</li>
                <li>Auxílio de custo para os alunos.</li>
                <li>Carga horária semanal.</li>
                <li>Produção de artigo científico.</li>
              </ul>
            </div>
            <Image src={Grupo} alt="grupo" className={styles.img} />
          </div>
          <Scroll />
        </div>

      )}

      {isMobile && (
        <>
          <div className={styles.container1}>
            <h1 className={styles.titleMain}>O que é a Iniciação Científica?</h1>
            <p className={styles.desc}>
              É um projeto organizado pela direção regional. São 10 grupos na
              Escola SESI, 3 Grupos na regional Sudeste e 15 estudantes por
              projeto.
            </p>
            {/* <div className={styles.imageContainer}>
                <Image src={Imagem} alt="lampada" className={styles.imgLamp} />
              </div> */}
          </div>

          <div className={styles.container2}>
            <div className={styles.item}>
              <h1 className={styles.title}>Missão</h1>
              <p className={styles.descItem}>
                Incentivar e desenvolver o protagonismo juvenil por meio da pesquisa
                para promover uma cultura científica e tecnológica.
              </p>
            </div>
            <div className={styles.item}>
              <h1 className={styles.title}>Valores</h1>
              <p className={styles.descItem}>
                Posicionar nacionalmente a Escola SESI como formadora de excelência
                em perspectivas científicas e tecnológicas em todas as áreas do
                conhecimento.
              </p>
            </div>

            <h1 className={styles.title}>Organização</h1>
            <p className={styles.desc}>
              5 grupos com 3 estudantes. Auxílio de custo para os alunos. Carga horária semanal. Produção de artigo científico.
            </p>
            <Image src={Grupo} alt="grupo" className={styles.img} />
          </div>
        </>
      )}
      <Project />
    </>
  )
};

export default About;
