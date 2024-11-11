import React from 'react';
import style from '../styles/style.module.css';

export default function Logo(){
    return(
        <div className={style.logotipe}>
            <h1>
                <i className="bi bi-mortarboard"></i>
                &lt;
                Neuro
                <span style={{color:"var(--flame)"}}>Code</span>/
                &gt;
            </h1>
        </div>
    )
}