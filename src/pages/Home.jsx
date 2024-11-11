import React, { useEffect, useState } from 'react';
import '../styles/home.css';

export default function Home(props) {
  const [index, setIndex] = useState(0);
  const carousel = [
    {
        titulo:"¡Reprograma tu mente, transforma tu código interno!",
        parrafo:"En NeuroCode, creemos que cada pensamiento es una línea de código que puedes reescribir. Aprende cómo actualizar tu mentalidad para desbloquear tu máximo potencial.",
        textoBoton:"Comenzar"
    },
    {
        titulo:"¡Cada día es un nuevo compilado de posibilidades.",
        parrafo:"Al igual que un programa optimizado, tu vida puede ajustarse y mejorar continuamente. Descubre en NeuroCode cómo cada amanecer te ofrece la oportunidad de pulir tu código interno.",
        textoBoton:"Comenzar"
    },
    {
        titulo:"¡La resiliencia es la base de tu sistema operativo mental.!",
        parrafo:"Para alcanzar el éxito, necesitas un código fuerte y adaptable. En NeuroCode, exploramos cómo la perseverancia y el aprendizaje constante son claves para actualizarte y superar cualquier desafío.",
        textoBoton:"Comenzar"
    },
  ]
  const porcentaje = 100 / carousel.length;

  useEffect(() => {
    const interval = setInterval(moveRightCarousel, 7000);
    return () => clearInterval(interval);
  });

  const moveRightCarousel = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === carousel.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const moveLeftCarousel = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? carousel.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  return (
    <section className="home">
      <div className="carousel">
        <div className="buttons">
          <button type="button" onClick={moveLeftCarousel}>
            <i className="bi bi-arrow-left-circle"></i>
          </button>
          <button type="button" onClick={moveRightCarousel}>
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
        <div
          className="carousel-content"
          style={{ transform: `translateX(-${index * porcentaje}%)` }}
        >
          {carousel.map((item, i) => (
            <div
              key={i}
              className={`carousel-slide ${i === index ? 'active' : ''}`}
            >
              <h3>
                {
                    item.titulo
                }
              </h3>
              <p>
                {
                    item.parrafo
                }
              </p>
              <button 
                type="button"
                onClick={()=>{
                  window.location.href = "http://localhost:3000/register";
                }}
              >
                {
                    item.textoBoton
                }
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
