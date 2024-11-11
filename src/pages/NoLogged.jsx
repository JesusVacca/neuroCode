import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/NoLogged.css';
import Logo from '../components/Logo';
import Home from './Home';
import Footer from '../components/Footer';
import Team from './Team';
import Login from './Register';
import Contact from './Contact';

export default function NoLogged(props){
    const [elementFocus,setElementFocus] = useState(0);
    const [hiddenNav,setHiddenNav] = useState(false);

    const handleClickElement =(index)=>{
        setElementFocus(index);
        setHiddenNav(false);
    }
    const options = [
        {
            path:"/",
            text:"Inicio",
            icon:"bi bi-house-fill",
            content:<Home setElementFocus={setElementFocus}/>
        },
        
        {
            path:"/about",
            text:"Acerca de",
            icon:"bi bi-people-fill",
            content:<p>Home</p>
        },
        {
            path:"/team",
            text:"Equipo",
            icon:"bi bi-code-slash",
            content:<Team setElementFocus={setElementFocus}/>
        },
        {
            path:"/contact",
            text:"Contacto",
            icon:"bi bi-phone-fill",
            content:<Contact setElementFocus={setElementFocus}/>
        },
        {
            path:"/register",
            text:"Unete",
            icon:"bi bi-door-open-fill",
            content:<Login setElementFocus={setElementFocus}/>
        },
        
    ];
    return(
        <>
            <Router>
                <header className='header'>
                    <Logo/>
                    <button 
                        type="button" 
                        className="hamburguesa"
                        onClick={()=>setHiddenNav(!hiddenNav)}
                    >
                        {
                            hiddenNav?
                            <i className="bi bi-x"></i>
                            :
                            <i className="bi bi-list"></i>
                        }
                    </button>
                    <nav className={hiddenNav?'':'hidden'}>
                        <ul>
                            {
                                options.map((option,index)=>{
                                    return <Li
                                        key={index}
                                        path={option.path}
                                        text={option.text}
                                        icon={option.icon}
                                        isActive={elementFocus === index}
                                        onClick={()=>handleClickElement(index)}
                                    />
                                })
                            }
                        </ul>
                    </nav>
                </header>
                <Routes>
                    {
                        options.map((option,index)=>{
                            return <Route path={option.path} element={option.content}  key={index}/>
                        })
                    }
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

const Li =(props)=>{
    return(
        <li>
            <Link
                className={props.isActive?'focused':''}
                onClick={props.onClick}
                to={props.path}
            >
                <i className={props.icon}></i>
                <span>{props.text}</span>
            </Link>
        </li>
    )
}