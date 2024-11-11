import React, { useEffect } from 'react';
import '../styles/contact.css';

export default function Contact(props){
    useEffect(()=>{
        props.setElementFocus(3);
    })
    return(
        <>
            <h3 className='sub-titulo'>Contactanos</h3>
            <section className="contact">
                <FormContact
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

const FormContact =(props)=>{
    return(
        <form className="form-contact">
            {
                props.fields.map((field,index)=>{
                    return <div className="form-row" key={index}>
                    {
                        field.type === "textarea"?
                        (
                            <textarea
                                name={field.name}
                                onChange={null}
                                id={field.id}
                                placeholder={field.placeholder}
                                required
                            >

                            </textarea>
                        )
                        :
                        (
                            <input 
                                type={field.type === null?'text':field.type}
                                name={field.name}
                                onChange={null}
                                id={field.id}
                                placeholder={field.placeholder} 
                                required
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