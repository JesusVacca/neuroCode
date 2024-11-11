import React from 'react';
import style from '../styles/style.module.css';
import Logo from './Logo';

export default function Footer(props){
    return(
        <footer className={style.footer}>
            <div className={style.copy}>
                <p>Creato por equipo</p>
                <Logo/>
            </div>
        </footer>
    )
}