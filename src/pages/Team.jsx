import React, { useEffect, useState } from 'react';
import '../styles/team.css';
export default function Team(props){
    useEffect(()=>{
        props.setElementFocus(2);
    })
    const team = [
        {
            fullname:"Jesus Rodolfo Vacca",
            img:"https://th.bing.com/th/id/R.241f8be90642d3f009688349c94eaa71?rik=4Qxt745s0rluWg&pid=ImgRaw&r=0",
            redes:[
                {
                    path:"",
                    icon:"bi bi-facebook"
                },
                {
                    path:"",
                    icon:"bi bi-instagram"
                },
                {
                    path:"",
                    icon:"bi bi-whatsapp"
                },
            ]
        },
        {
            fullname:"Gustavo Adolgo Aguilera",
            img:"https://th.bing.com/th/id/R.241f8be90642d3f009688349c94eaa71?rik=4Qxt745s0rluWg&pid=ImgRaw&r=0",
            redes:[
                {
                    path:"",
                    icon:"bi bi-facebook"
                },
                {
                    path:"",
                    icon:"bi bi-instagram"
                },
                {
                    path:"",
                    icon:"bi bi-whatsapp"
                },
            ]
        },
        {
            fullname:"Erick Daniel Ojeda Angarira",
            img:"https://th.bing.com/th/id/R.241f8be90642d3f009688349c94eaa71?rik=4Qxt745s0rluWg&pid=ImgRaw&r=0",
            redes:[
                {
                    path:"",
                    icon:"bi bi-facebook"
                },
                {
                    path:"",
                    icon:"bi bi-instagram"
                },
                {
                    path:"",
                    icon:"bi bi-whatsapp"
                },
            ]
        },
        {
            fullname:"Luis Felipe Oliveros Guerra",
            img:"https://th.bing.com/th/id/R.241f8be90642d3f009688349c94eaa71?rik=4Qxt745s0rluWg&pid=ImgRaw&r=0",
            redes:[
                {
                    path:"",
                    icon:"bi bi-facebook"
                },
                {
                    path:"",
                    icon:"bi bi-instagram"
                },
                {
                    path:"",
                    icon:"bi bi-whatsapp"
                },
            ]
        },
    ]
    return(
        <>
            <h3 className='sub-titulo'>Nuestro equipo de trabajo</h3>
            <section className="team">
                {
                    team.map((item,index)=>{
                        return <ItemTeam
                            fullname={item.fullname}
                            img={item.img}
                            redes={item.redes}
                            key={index}
                        />
                    })
                }
            </section>
        </>
    )
}

const ItemTeam=(props)=>{
    const [hiddenDescription, setHiddenDescription] = useState(false);
    return(
        <div className="item-team">
            <button 
                type="button" 
                className='hamburguesa'
                onClick={(e)=>setHiddenDescription(!hiddenDescription)}
            >
                {
                    hiddenDescription?
                    <i className="bi bi-x"></i>
                    :
                    <i className="bi bi-list"></i>
                }
            </button>
            <img src={props.img}  alt="Acercar del integrante" />
                <div className={hiddenDescription? "description reveal":"description"}>
                    <p>
                        <i className="bi bi-check"></i>
                        <span>
                            {props.fullname}
                        </span>
                    </p>
                    <div className="social">
                        {
                            props.redes.map((social,index)=>{
                                return <a href={social.path} key={index}> 
                                    <i className={social.icon}></i>
                                </a>
                            })
                        }
                    </div>
                </div>
        </div>
    )
}