import styles from './ButtonA.module.css'

export default function ButtonA({link, text}){

    return(
        <div>
            <a href={link} target="_blank">

                <button className={styles.btn}>{text}</button>
         </a>
        </div>
    )
}