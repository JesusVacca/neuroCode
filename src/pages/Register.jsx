import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import Spinner from '../components/Spinner';
export default function Login(props){


    useEffect(()=>{
        props.setElementFocus(4);
    })

    const [isRegister,setIsRegister] = useState(true);
    const [login,setLogin] = useState({
        "userName":"",
        "passwordUser":""
    })

    
    const handleClick =(bool)=>{
        setIsRegister(bool);
    }
    return(
        <>
            <h3 className="sub-titulo">Registrate o inicia sesión</h3>
            <section className="login">
                {
                    isRegister?(
                        <Formulario
                            title={"Bienvenidos, ingrese sus credenciales."}
                            url={"http://localhost:8080/login"}
                            data={login}
                            setData={setLogin}
                            fields={[
                                {
                                    id:"userName",
                                    icon:"bi bi-person-fill",
                                    placeholder:"Nombre de usuario",
                                    name:"userName",
                                    value:null,
                                    type:null
                                },
                                {
                                    id:"passwordUser",
                                    icon:"bi bi-key-fill",
                                    placeholder:"Contraseña",
                                    name:"passwordUser",
                                    value:null,
                                    type:"password"
                                },
                            ]}
                            enlaces={[
                                {
                                    text:"¿Olvidó su contraseña?",
                                    onclick:null
                                },
                                {
                                    text:"¿No tiene cuenta aún?",
                                    onclick:(e)=>{handleClick(false)}
                                },
                            ]}
                        />
                    ):
                    (
                        <Formulario
                            title={"Por favor llene los campos que son requeridos"}
                            className={"left"}
                            data={null}
                            setData={null}
                            url={""}
                            fields={[
                                {
                                    id:"name",
                                    icon:null,
                                    placeholder:"¿Cuál es su nombre?*",
                                    name:"name",
                                    value:null,
                                    type:null
                                },
                                {
                                    id:"lastname",
                                    icon:null,
                                    placeholder:"¿Cuál es su apellido?*",
                                    name:"lastname",
                                    value:null,
                                    type:"text"
                                },
                                {
                                    id:"emailAddrres",
                                    icon:null,
                                    placeholder:"¿Cuál es su correo electrónico?*",
                                    name:"emailAddrres",
                                    value:null,
                                    type:"email"
                                },
                                {
                                    id:"phoneNumber",
                                    icon:null,
                                    placeholder:"¿Cuál es su número de telefono?*",
                                    name:"phoneNumber",
                                    value:null,
                                    type:"number"
                                },
                            ]}
                            enlaces={[
                                {
                                    text:<>
                                        <label htmlFor="conditions">
                                            <input type="checkbox" name='conditions' />
                                            <a href='https://google.com'>¿Acepta los termoninos y condidiones?</a>
                                        </label>
                                    </>,
                                    onclick:null
                                },
                                {
                                    text:"¿Ya tiene cuenta?",
                                    onclick:(e)=>{handleClick(true)}
                                },
                            ]}
                        />
                    )
                }
            </section>
        </>
    )
}

const Formulario=(props)=>{
    
    const [isLoanding,setIsLoanding] = useState(false);

    const handleInputChange =(event)=>{
        if(props.setData == null) return;
        const name = event.target.name;
        const value = event.target.value;
        props.setData(values=>({
            ...values,
            [name]:value
        }))
    }

    const handleSubmitData =(event)=>{
        if(props.data === null) return;
        event.preventDefault();
        setIsLoanding(true);
        fetch(props.url,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(props.data)
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error en la solicitud");
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.log("Error ->",error);
        })
        .finally(()=>{
            setIsLoanding(false);
        })
    }
    return(
        <form 
            onSubmit={handleSubmitData}
            className={props.className === null?"form":`form ${props.className}`}
        >
            {
                isLoanding && (
                    <Spinner/>
                )
            }
            <h3>{props.title}</h3>
            {
                props.fields.map((field,index)=>{
                    return <div className="form-row" key={index}>
                        {
                            field.icon !== null?
                            (
                                <>
                                    <i className={field.icon}></i>
                                    <input 
                                        type={field.type === null? 'text':field.type} 
                                        placeholder={field.placeholder}
                                        id={field.id}
                                        name={field.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </>

                            )
                            :
                            (
                                <input 
                                        type={field.type === null? 'text':field.type} 
                                        placeholder={field.placeholder}
                                        id={field.id}
                                        name={field.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                            )
                        }
                    </div>
                })
            }
            <div className="form-row">
                <input type="submit" value="Entrar" />
            </div>
            <div className="form-row enlaces">
                {
                    props.enlaces.map((enlace,index)=>{
                        return <button 
                            key={index}
                            type="button"
                            onClick={enlace.onclick}
                        >
                            {enlace.text}
                        </button>
                    })
                }
            </div>
        </form>
    )
}