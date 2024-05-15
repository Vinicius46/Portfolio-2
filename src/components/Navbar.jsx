import style from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export function Navbar(){

    return (
        <div className={style.nav}>
            <ul >
                <li><a href="#Projetos">Projetos</a></li>
                <li><a href="#Tecnologias">Tecnologias</a></li>
                <li><a href="#Sobremin">Sobre mim</a></li>
            </ul>
            <ul>
                <li><a href='https://github.com/Vinicius46' target='_blank'><FaGithub size={40}/></a></li>
                <li><a href='https://www.linkedin.com/in/vinicius-cirilo-1b12a5191/' target='_blank'><FaLinkedin size={40}/></a></li>
            </ul>
        
        </div>

    )
}