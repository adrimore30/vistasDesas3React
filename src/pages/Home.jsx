import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // ✅ Agregado para redirección
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

import derrumbe from '../assets/derrumbe.png';
import incendio from '../assets/incendio.png';
import tormenta from '../assets/tormenta.png';
import inundacion from '../assets/inundacion.png';
import bomberos from '../assets/bomberos.jpg';
import hospital from '../assets/hospital.jpg';
import defensa from '../assets/defensacivil.jpg';

import carrusel1 from '../assets/bomberos.jpg';
import carrusel2 from '../assets/defensacivil.jpg';
import carrusel3 from '../assets/defensacivil.jpg';
import carrusel4 from '../assets/ungrd.png';

import qrCode from '../assets/qr-code.png';

const Home = () => {
  const navigate = useNavigate(); //  Inicializamos el hook

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    fade: true
  };

  const carouselImages = [
    { id: 1, src: carrusel1, alt: "Equipos de rescate", caption: "Respuesta inmediata ante emergencias" },
    { id: 2, src: carrusel2, alt: "Defensa civil", caption: "Coordinación profesional en situaciones críticas" },
    { id: 3, src: carrusel3, alt: "Ayuda humanitaria", caption: "Asistencia integral para afectados" },
    { id: 4, src: carrusel4, alt: "Prevención", caption: "Sistema de alertas tempranas" }
  ];

  // Función que navega al chat con estado de emergencia
  const handleReportEmergency = () => {
    navigate("/chat", { state: { chatId: "emergencia" } });
  };

  return (
    <div className="home-container">
      {/* Hero Section con gradiente de emergencia */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="intro-subtitle">BIENVENIDOS A DESAS3</p>
          <h1 className="intro-title">
            SISTEMA INTEGRAL PARA LA GESTIÓN DE DESASTRES NATURALES
          </h1>
          <p className="intro-text">
            Plataforma tecnológica que monitorea, analiza y coordina respuestas ante emergencias naturales, salvando vidas y protegiendo comunidades.
          </p>
          <div className="hero-buttons">
            {/* Botón modificado */}
            <button className="btn-emergency" onClick={handleReportEmergency}>
              REPORTAR EMERGENCIA
            </button>
            <button className="btn-project">CONOCE EL PROYECTO</button>
          </div>
        </div>
      </section>

      {/* Sección de tipos de desastres */}
     <section className="disaster-report-section">
  <div className="section-container">
    <div className="report-header">
      <h2 className="report-main-title">¿VES UNA EMERGENCIA?</h2>
      <p className="report-subtitle">¡REPÓRTALA AHORA! Tu alerta puede salvar vidas</p>
      <div className="urgency-indicator">
        <span className="pulse-dot"></span>
        <span className="urgency-text">CADA SEGUNDO CUENTA</span>
      </div>
    </div>
    
    <div className="disaster-report-grid">
      {/* Derrumbe → Defensa Civil */}
      <Link to="/chat?chat=defensa-civil" className="report-button derrumbe-btn">
        <div className="report-icon-container">
          <img src={derrumbe} alt="Derrumbe" className="report-icon" />
        </div>
        <div className="report-content">
          <h3 className="report-name">REPORTAR DERRUMBE</h3>
          <p className="report-action">Zonas de riesgo • Deslizamientos</p>
          <div className="report-arrow">→</div>
        </div>
      </Link>

      {/* Incendio → Bomberos */}
      <Link to="/chat?chat=bomberos" className="report-button incendio-btn">
        <div className="report-icon-container">
          <img src={incendio} alt="Incendio" className="report-icon" />
        </div>
        <div className="report-content">
          <h3 className="report-name">REPORTAR INCENDIO</h3>
          <p className="report-action">Fuego • Humo • Estructuras</p>
          <div className="report-arrow">→</div>
        </div>
      </Link>

      {/* Tormenta → Defensa Civil */}
      <Link to="/chat?chat=defensa-civil" className="report-button tormenta-btn">
        <div className="report-icon-container">
          <img src={tormenta} alt="Tormenta" className="report-icon" />
        </div>
        <div className="report-content">
          <h3 className="report-name">REPORTAR TORMENTA</h3>
          <p className="report-action">Clima severo • Granizo • Vientos</p>
          <div className="report-arrow">→</div>
        </div>
      </Link>

      {/* Inundación → UDGR */}
      <Link to="/chat?chat=udgr" className="report-button inundacion-btn">
        <div className="report-icon-container">
          <img src={inundacion} alt="Inundación" className="report-icon" />
        </div>
        <div className="report-content">
          <h3 className="report-name">REPORTAR INUNDACIÓN</h3>
          <p className="report-action">Ríos • Calles • Desbordamientos</p>
          <div className="report-arrow">→</div>
        </div>
      </Link>
    </div>

    <div className="emergency-footer">
      <p className="emergency-note">
        <strong>🚨 EMERGENCIA MÉDICA:</strong> Marca <strong>123</strong> inmediatamente
      </p>
    </div>
  </div>
</section>

      {/* Sección de entidades colaboradoras */}
      <section className="entities-section">
        <div className="section-container">
          <h2 className="section-title">COLABORAMOS CON LAS PRINCIPALES ENTIDADES DE RESPUESTA</h2>
          <div className="entity-logos">
            <div className="entity-item">
              <div className="entity-logo-container">
                <img src={bomberos} alt="Bomberos" className="entity-logo" />
              </div>
              <div className="entity-content">
                <h3 className="entity-name">Cuerpo de Bomberos</h3>
                <p className="entity-description">Entidad especializada en respuesta a incendios y rescates</p>
                <a href="/bomberos" className="entity-link">Más información</a>
              </div>
            </div>
            
            <div className="entity-item">
              <div className="entity-logo-container">
                <img src={hospital} alt="Hospital" className="entity-logo" />
              </div>
              <div className="entity-content">
                <h3 className="entity-name">Hospitales Locales</h3>
                <p className="entity-description">Atención médica de emergencia y primeros auxilios</p>
                <a href="/hospitales" className="entity-link">Más información</a>
              </div>
            </div>
            
            <div className="entity-item">
              <div className="entity-logo-container">
                <img src={defensa} alt="Defensa Civil" className="entity-logo" />
              </div>
              <div className="entity-content">
                <h3 className="entity-name">Defensa Civil</h3>
                <p className="entity-description">Coordinación en emergencias y desastres naturales</p>
                <a href="/defensa-civil" className="entity-link">Más información</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de situaciones */}
      <section className="carousel-section">
        <h2 className="section-title">NUESTRO SISTEMA EN ACCIÓN</h2>
        <div className="carousel-container">
          <Slider {...carouselSettings}>
            {carouselImages.map((image) => (
              <div key={image.id} className="carousel-slide">
                <img src={image.src} alt={image.alt} />
                <div className="carousel-caption">
                  <h3>{image.caption}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Sección de descarga de app */}
      <section className="download-app-section">
        <div className="section-container download-container">
          <div className="qr-code-container">
            <div className="qr-code-card">
              <img src={qrCode} alt="Código para descargar la app" className="qr-code-image" />
              <p className="scan-text">ESCANEA Y DESCARGA LA APP</p>
              <div className="app-badges">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="app-badge" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="app-badge" />
              </div>
            </div>
          </div>
          
          <div className="download-text">
            <h2 className="download-title">LLÉVANOS CONTIGO A DONDE VAYAS</h2>
            <p className="download-description">
              La aplicación móvil DESAS3 te mantiene informado y protegido con:
            </p>
            <ul className="features-list">
              <li><i className="fas fa-bell"></i> Alertas en tiempo real en tu zona</li>
              <li><i className="fas fa-map-marked-alt"></i> Mapas interactivos de riesgo</li>
              <li><i className="fas fa-first-aid"></i> Guías de primeros auxilios</li>
              <li><i className="fas fa-phone-alt"></i> Contactos de emergencia directos</li>
              <li><i className="fas fa-exclamation-triangle"></i> Sistema de reporte rápido</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Llamado a la acción final */}
      <section className="cta-section">
        <h2>¿LISTO PARA PROTEGERTE Y PROTEGER A LOS TUYOS?</h2>
        <p>Regístrate ahora y forma parte de nuestra comunidad de prevención</p>
        <button className="btn-register">REGISTRARME GRATIS</button>
      </section>
    </div>
  );
};

export default Home;