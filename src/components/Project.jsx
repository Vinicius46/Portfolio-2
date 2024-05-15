import Card from './Card'
import btcamp from './image/btcamp.svg'
import prevTemp from './image/prevTemp.svg'
import styles from '../../src/components/Project.module.css'

export default function Project() {
    return (
        <div className={styles.project} id="Projects">
            <h1>Projetos</h1>
    
                <Card img={btcamp} title="BOOTCAMP DNC" tech="CSS e HTML5" description="Uma página de captura e também inscrição para os curso de uma instituição." repo="https://github.com/Vinicius46/Bootcamp?tab=readme-ov-file" site="https://bootcamp01.netlify.app/" />

                <Card img={prevTemp} title="DncWeather" tech="CSS, HTML5 e Javascript" description="Neste site podemos saber o tempo e também pesquisar endereços através do consumo de APIs de tempo e CEP." repo="https://github.com/Vinicius46/DesafioAPI_DNC" site="https://previsaodotempoecep.netlify.app/" />

        </div>
    )
}