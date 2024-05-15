import styles from './Presentation.module.css'
import ButtonA  from './elements/ButtonA'

export function Presentation(){

    return(
        <div className={styles.presentation}>
            <h1>Olá, eu sou Vinicius Cirilo!</h1>
            <p>Sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes e <br/>interativas. Tenho experiência em construir interfaces de usuário eficientes e elegantes,<br/> garantindo uma navegação intuitiva e acessibilidade para todos os usuários.<br/>

            Minhas habilidades incluem conhecimento aprofundado em HTML, CSS e JavaScript, além de <br/>framework popular como React. Estou sempre em busca de novas tecnologias e <br/> tendências para aprimorar minhas habilidades e oferecer soluções inovadoras aos meus clientes.</p>

            <ButtonA text='Saber mais'/>
        </div>

    )
}