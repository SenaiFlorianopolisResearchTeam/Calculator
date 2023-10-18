import styles from './project.module.css'

export default function Project() {
    return (
        <>
                <h1 className={styles.title}>Grupos</h1>
            <div className={styles.containerProject}>
                
                <ol className={styles.text}>
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
            </div>
                <h2>Nosso Projeto:</h2>
            <div className={styles.ourProject}>
                <p>Desenvolvimento de uma plataforma calculadora para análise dos níveis de ruído rodoviário|</p>
                <div className={styles.pdf}>
                    <p>Leia nosso artigo científico</p>
                    <button>PDF</button>
                </div>
            </div>
        </>
    )
}