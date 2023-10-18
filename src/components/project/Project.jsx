import styles from './project.module.css'
import useMediaQuery from '@mui/material/useMediaQuery'

const MediaQueryComponent = () => {
    const isDesktop = useMediaQuery('(min-width:800px)');
    const isMobile = useMediaQuery('(max-width:800px)');

    return { isDesktop, isMobile };
};

export default function Project() {

    const { isDesktop, isMobile } = MediaQueryComponent();

    return (
        <>
            <h1 className={styles.title}>Grupos</h1>
            <div className={styles.containerProject}>

                <ol className={styles.textGroups}>
                    <li>Desenvolvimento de uma plataforma calculadora para análise dos níveis de ruído rodoviário</li>
                    <p> (Ana Beatriz Martins, Yuri Castilho e Isadora Wenzel da Silveira)</p>
                    <li>Revolucionando o Controle do Ruído Rodoviário: Uma Abordagem Baseada em Inteligência Artificial</li>
                    <p> (Gabriel Pelizzaro Pereira, Pedro Henrique Nunes Zanette e Vítor Kurth Vasconcellos)</p>
                    <li>Análise da qualidade sonora em salas de aula: Estudo preliminar do tempo de reverberação</li>
                    <p>(Lucas Nascimento Garcez, Vitor Cunha de Souza, Tiago Roldão Simon)</p>
                    <li>Análise do isolamento ao ruído aéreo entre salas de aula</li>
                    <p>(Raul Vicente Gelsleichter, Sara Rotenski Pereira, Zyon Francisco Gomes Machado)</p>
                    <li>Análise do isolamento do ruído de impacto entre pisos</li>
                    <p>(Bibiana Engel Ribeiro, Carolina Vasco da Silva e Larissa Miranda Medeiros)</p>
                </ol>
                <h2 className={styles.subtitle}>Nosso Projeto</h2>
                <div className={styles.cardProject}>
                    <p className={styles.titleProject}>Desenvolvimento de uma plataforma calculadora para análise dos níveis de ruído rodoviário</p>
                    {isDesktop ? (
                        <p className={styles.textProject}>Essa plataforma se propõe a ser uma ferramenta eficaz para avaliar e mitigar os efeitos sonoros decorrentes do fluxo rodoviário. A metodologia empregada inclui a integração de dados geoespaciais, informações sobre as características das rodovias, dados de tráfego de veículos e modelos analíticos para permitir um cálculo mais preciso dos níveis de ruído em decibéis (dB) em diversos pontos ao longo das vias. Cabe ressaltar que o combate ao ruído rodoviário é um desafio global que demanda abordagens complexas e o uso de novas tecnologias para minimizar seus impactos negativos. A diversidade desses modelos e a apresentação dos conteúdos em pauta representam uma abordagem abrangente para enfrentar o desafio em questão, tornando possível a adaptação às necessidades específicas de diferentes situações e regiões e contribuindo para uma compreensão mais ampla e eficaz do tema. <span>Leia nosso artigo científico!</span>
                        </p>
                    ) : (
                        <div className={styles.textProject}>
                            <p>Essa plataforma se propõe a ser uma ferramenta eficaz para avaliar e mitigar os efeitos sonoros decorrentes do fluxo rodoviário. </p>
                            <p>A metodologia empregada inclui a integração de dados geoespaciais, informações sobre as características das rodovias, dados de tráfego de veículos e modelos analíticos para permitir um cálculo mais preciso dos níveis de ruído em decibéis (dB) em diversos pontos ao longo das vias.</p>
                            <p>Cabe ressaltar que o combate ao ruído rodoviário é um desafio global que demanda abordagens complexas e o uso de novas tecnologias para minimizar seus impactos negativos.</p>
                            <p> A diversidade desses modelos e a apresentação dos conteúdos em pauta representam uma abordagem abrangente para enfrentar o desafio em questão, tornando possível a adaptação às necessidades específicas de diferentes situações e regiões e contribuindo para uma compreensão mais ampla e eficaz do tema. <span>Leia nosso artigo científico!</span>
                            </p>
                        </div>
                    )}

                    <div className={styles.moreInfo}>
                        <a href='https://github.com/anabmartins/IC-Website-2023' target='_blank'>
                            <img src="./mdi_github.svg" />
                            Ver repositório</a>
                        <a className={styles.btnPDF}
                            href='./ArtigoIC.pdf'
                            download='Artigo.pdf'>
                            <p id='btnTxt'>Baixar PDF</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}