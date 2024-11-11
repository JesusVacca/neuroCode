import React from 'react';
import style from '../styles/style.module.css';
export default function Spinner(props){
    return(
        <div className={style.spinner_content}>
            <div className={style.spinner}>
                <div className={style.spinner_child}></div>
            </div>
        </div>
        
    )
}