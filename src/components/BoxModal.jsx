import React from 'react';
import style from '../styles/style.module.css';
export default function BoxModalAlert(props){
    return(
        <div className={style.box_modal}>
            <div className={style.modal}>
                {
                    props.warning?
                    (
                        <i style={{color:"red"}} className="bi bi-exclamation-octagon"></i>
                    )
                    :
                    (
                        <i className="bi bi-check-circle"></i>
                    )
                }
                <h3 className={props.warning?`${style.warning}`:''}>¡{props.title === null?"Buen trabajo":props.title}!</h3>
                <p>{props.text}</p>
                <button 
                    type="button"
                    onClick={props.onclick}
                    className={props.warning?`${style.warning}`:''}
                >
                    Cerrar modal
                </button>
            </div>
        </div>
    )
}