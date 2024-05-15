import styles from './Footer.module.css'
import { FaGithub, FaLinkedin} from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";

export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.contato}>
                <div className={styles.cont}>
                    <label>Meu Contato:</label>
                    <p>(19)99999-9999</p>
                </div>
                <div className={styles.cont}>
                    <label>E-mail:</label>
                    <p>xxx@xczn.com</p>
                </div>
            </div>
            
                <ul>
                    <li>
                        <a href="https://github.com/Vinicius46" target='_blank'>
                            <FaGithub size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vinicius-cirilo-1b12a5191/" target='_blank'>
                            <FaLinkedin size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=1-190&t=XoMwbxr0viKOmkpf-0" target='_blank'>
                            <IoLogoFigma size={40}/>
                        </a>
                    </li>
                </ul>
            
        </div>
    )
    
}