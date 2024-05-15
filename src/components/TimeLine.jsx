import styles from './TimeLine.module.css'

export function TimeLine(){

    return(
        <div className={styles.timeline}>
            <h1>Sobre mim</h1>
            <div className={styles.line}>
                <div>
                    <h1>2021</h1>
                    <p>Término do curso técnico em mecatrônica</p>
                </div>
                <div>
                <h1>2022</h1>
                <p>Neste ano foquei no emprego atual onde passei a maior parte do tempo viajando a trabalho. </p>
                </div>
                <div>
                <h1>2023</h1>
                <p>Passei a trabalhar em uma nova área na empresa com geração de energia através de gás de aterros sanitários.</p>
                </div>
                <div>
                <h1>2024</h1>
                <p>Atualmente estou buscando minha transição de carreira, deixando á área de manutenção mecânica e partindo para um novo desafío na área da programação, focando em desenvolvimento Front end. </p>
                </div>
            </div>
        </div>
    )
}
