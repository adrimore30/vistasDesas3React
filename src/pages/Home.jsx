import React from 'react';
import './Home.css';

import derrumbe from '../assets/derrumbe.png';
import incendio from '../assets/incendio.png';
import tormenta from '../assets/tormenta.png';
import inundacion from '../assets/inundacion.png';
import bomberos from '../assets/bomberos.jpg';
import hospital from '../assets/hospital.jpg';
import defensa from '../assets/defensacivil.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección blanca de bienvenida */}
      <section className="section white">
        <p className="intro-subtitle">BIENVENIDOS A DESOFT</p>
        <h1 className="intro-title">
          SISTEMA DE INFORMACIÓN PARA LA COMUNICACIÓN DE DESASTRES NATURALES
        </h1>
        <p className="intro-text">
          Sistema digital que centraliza, procesa y difunde información crítica sobre desastres naturales para facilitar una respuesta efectiva.
        </p>
        <button className="btn-project">NUESTRO PROYECTO</button>
      </section>

      {/* Sección negra con logos de desastres */}
      <section className="section black disaster-section">
        <h2 className="section-title">TIPOS DE DESASTRES</h2>
        <div className="disaster-logos">
          <div className="disaster-item">
            <img src={derrumbe} alt="Derrumbe" />
            <span>Derrumbe</span>
          </div>
          <div className="disaster-item">
            <img src={incendio} alt="Incendio" />
            <span>Incendio</span>
          </div>
          <div className="disaster-item">
            <img src={tormenta} alt="Tormenta" />
            <span>Tormenta</span>
          </div>
          <div className="disaster-item">
            <img src={inundacion} alt="Inundación" />
            <span>Inundación</span>
          </div>
        
        </div>
      </section>

      {/* Sección blanca: entidades */}
      <section className="section white entities-section">
        <h2 className="section-title">ENTIDADES DE RESPUESTA</h2>
        <div className="entity-logos">
          <div className="entity-item">
            <img src={bomberos} alt="Bomberos" />
            <span>Bomberos</span>
          </div>
          <div className="entity-item">
            <img src={hospital} alt="Hospital" />
            <span>Hospital</span>
          </div>
          <div className="entity-item">
            <img src={defensa} alt="Defensa Civil" />
            <span>Defensa Civil</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
