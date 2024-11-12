import React, { useEffect, useState } from 'react';
import '../styles/contact.css';
import Spinner from '../components/Spinner';
import BoxModalAlert from '../components/BoxModal';

export default function Contact(props){
    const [data,setData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    useEffect(()=>{
        props.setElementFocus(3);
    })
    
    return(
        <>
            <h3 className='sub-titulo'>Contáctenos</h3>
            <section className="contact">
                <div className="info">
                    {
                        [
                            {
                                title:"Dirección",
                                icon:"bi bi-geo-alt",
                                description:"Cr 21 #1A-N53"
                            },
                            {
                                title:"Llámanos",
                                icon:"bi bi-phone-fill",
                                description:"+57 3117984622"
                            },
                            {
                                title:"Envíenos un correo electrónico",
                                icon:"bi bi-envelope-at-fill",
                                description:<a href='mailto:jesus.vacca99@gmail.com'>
                                    Jesus.vacca99@gmail.com
                                </a>
                            },
                        ].map((item,index)=>{
                            return <InfoItem
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                                key={index}
                            />
                        })
                    }
                </div>
                <FormContact
                    url={"http://localhost:8080/contact"}
                    setData={setData}
                    data={data}
                    fields={[
                        {
                            id:"name",
                            name:"name",
                            type:"text",
                            placeholder:"¿Cuál es su nombre?"
                        },
                        {
                            id:"email",
                            name:"email",
                            type:"email",
                            placeholder:"¿Cuál es su correo electrónico?"
                        },
                        {
                            id:"subject",
                            name:"subject",
                            type:"text",
                            placeholder:"Asunto"
                        },
                        {
                            id:"message",
                            name:"message",
                            type:"textarea",
                            placeholder:"Mensaje"
                        },
                    ]}
                />
            </section>
        </>
    )
}

const InfoItem =(props)=>{
    return(
        <div className="info-item">
            <span>
                <i className={props.icon}></i>
            </span>
            <div className="info-content">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
const FormContact =(props)=>{
    const [spinner,setSpinner] = useState(false);
    const [modalData, setModalData] = useState({
        modal:false,
        title:"",
        text:"",
        warning:false
    })

    const handleInputChange =(event)=>{
        if(props.setData === null) return;
        const name = event.target.name;
        const value = event.target.value;
        props.setData(values => ({
            ...values,
            [name]:value
        }))
    }
    return(
        <form 
            className="form-contact"
            onSubmit={(e)=>{
                e.preventDefault();
                setSpinner(true);
                fetch(props.url,{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(props.data)
                })
                .then(response =>{
                    if(!response.ok){
                        throw new Error("Error en la solicitud");
                    }
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    setModalData({
                        modal:true,
                        title:"Buen trabajo",
                        text:"Mensaje enviado con exito",
                        warning:false
                    })
                })
                .catch(error =>{
                    console.log(error);
                    setModalData({
                        modal:true,
                        title:"Error inesperado",
                        text:"Ocurrio un error al enviar el mensaje",
                        warning:true
                    })
                })
                .finally(()=>{
                    setSpinner(false);
                })
            }}
        >
            {
                modalData.modal && (
                    <BoxModalAlert
                        title={modalData.title}
                        text={modalData.text}
                        warning={modalData.warning}
                        onclick={(e)=>setModalData({modal:false})}
                    />
                )
            }
            {
                spinner && (
                    <Spinner/>
                )
            }
            {
                props.fields.map((field,index)=>{
                    return <div className="form-row" key={index}>
                    {
                        field.type === "textarea"?
                        (
                            <textarea
                                name={field.name}
                                id={field.id}
                                placeholder={field.placeholder}
                                required
                                onChange={handleInputChange}
                            >

                            </textarea>
                        )
                        :
                        (
                            <input 
                                type={field.type === null?'text':field.type}
                                name={field.name}
                                id={field.id}
                                placeholder={field.placeholder} 
                                required
                                onChange={handleInputChange}
                                />
                        )
                    }
                    </div>
                })
            }
            
            <div className="form-row">
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    )
}