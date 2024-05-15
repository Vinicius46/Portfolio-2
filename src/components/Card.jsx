import styles from './Card.module.css'
import ButtonA from './elements/ButtonA'


export default function Card({ img, title, tech, description, repo, site }) {
   



    return (
        <div className={styles.card}>
            
                <li>
                    <a href={site}>
                        <img src={img} alt='ERROR'/>
                            <h3>{title}</h3>
                            <p><strong>Tecnologia:</strong> {tech} </p>
                            <p>{description}</p>
                    </a>
                            <ButtonA text='Clique aqui' link=''/>
                </li>
                
        </div>
    )
}