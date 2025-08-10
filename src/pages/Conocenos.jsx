import React from 'react';
import './Conocenos.css';

// Importar imágenes desde assets
import kodelamd from '../assets/kodelamd.JPG';
import michelle from '../assets/michelle.jpg';
import adriana from '../assets/adriana.jpg';
import david from '../assets/david.jpg';
import kevin from '../assets/kevin.jpg';
import luis from '../assets/luis.jpg';

const Conocenos = () => {
    return (
        <div>
            {/* Sección Hero */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center text-lg-start">
                            <img src={kodelamd} alt="Kodelamd" />
                        </div>
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold">Conócenos</h1>
                            <div className="bg-primary mb-4" style={{ width: '80px', height: '4px' }}></div>
                            <p className="lead">
                                En KodeLAMD, somos un equipo de cinco jóvenes innovadores que han unido fuerzas para revolucionar el mundo del desarrollo de software.
                                Nuestra pasión por la tecnología nos impulsa a crear soluciones digitales a medida que no solo cumplen, sino que superan las expectativas.
                            </p>
                          


                        </div>
                    </div>
                </div>
            </section>

            {/* Sección "Quiénes Somos" */}
            <section id="quienes-somos" className="quienes-somos-section">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold">Quiénes Somos</h2>
                    <div className="bg-primary mx-auto mb-4" style={{ width: '80px', height: '4px' }}></div>
                    <p className="lead text-muted">
                        KodeLAMD es más que una empresa; somos un colectivo de visionarios que fusionan creatividad y tecnología.
                    </p>

                    <div className="row mt-4 justify-content-center">
                        <Card 
                            title="Innovación Tecnológica" 
                            icon="fas fa-code" 
                            description="Nuestra juventud es nuestra mayor fortaleza, ya que hemos crecido en un entorno digital que nos permite anticipar tendencias y adaptarnos con rapidez." 
                        />
                        <Card 
                            title="Aliado Estratégico" 
                            icon="fas fa-lightbulb" 
                            description="Cada miembro de nuestro equipo aporta habilidades únicas, creando una sinergia que nos permite abordar cualquier reto con confianza y ofrecerte soluciones personalizadas." 
                        />
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="philosophy-section">
                <div className="container text-center text-white">
                    <h2 className="display-5 fw-bold">Nuestra Filosofía</h2>
                    <div className="bg-primary mx-auto my-3" style={{ width: '80px', height: '4px' }}></div>

                    <div className="row justify-content-center">
                        <MissionVisionCard 
                            title="Misión" 
                            icon="fas fa-bullseye" 
                            lead="Convertir ideas en soluciones digitales innovadoras"
                            description="En KodeLAMD, nuestra misión es desarrollar software de alta calidad que optimiza procesos, mejora la experiencia del usuario y potencia el crecimiento de nuestros clientes. A través de un enfoque colaborativo y personalizado, trabajamos codo a codo contigo para garantizar que cada solución sea un reflejo de tus objetivos."
                        />
                        <MissionVisionCard 
                            title="Visión" 
                            icon="fas fa-binoculars" 
                            lead="Ser pioneros en el desarrollo de software"
                            description="Nuestra visión es destacarnos por nuestra creatividad, agilidad y capacidad para anticipar las tendencias tecnológicas del futuro. Aspiramos a dejar una huella significativa en el ecosistema digital, estableciendo alianzas estratégicas que impulsen la transformación digital y contribuyan al avance tecnológico de nuestra comunidad."
                        />
                    </div>
                </div>
            </section>

            {/* Equipo */}
            <section className="team-section">
                <div className="container text-center">
                    <h2 className="display-5 fw-bold">Nuestro Equipo</h2>
                    <div className="bg-primary mx-auto my-3" style={{ width: '80px', height: '4px' }}></div>
                    <p className="lead text-muted">Conoce a los profesionales detrás de KodeLAMD</p>

                    <div className="row g-4 justify-content-center">
                        <TeamMemberCard 
                            image={michelle} 
                            name="Alba Michelle Jiménez Morales" 
                            role="Desarrolladora Backend" 
                            description="Especializada en Laravel y bases de datos, con amplia experiencia en arquitectura de aplicaciones web."
                            socialLinks={{
                                linkedin: "#",
                                github: "#",
                                email: "#"
                            }}
                        />
                        <TeamMemberCard 
                            image={adriana} 
                            name="Carmen Adriana Moreno Castillo" 
                            role="Diseñadora UI/UX" 
                            description="Apasionada por crear experiencias digitales atractivas y funcionales centradas en el usuario."
                            socialLinks={{
                                linkedin: "#",
                                dribbble: "#",
                                email: "#"
                            }}
                        />
                        <TeamMemberCard 
                            image={david} 
                            name="David Alexander Martínez López" 
                            role="Ingeniero de Calidad" 
                            description="Especialista en pruebas automatizadas y control de versiones para garantizar software de alta calidad."
                            socialLinks={{
                                linkedin: "#",
                                github: "#",
                                email: "#"
                            }}
                        />
                        <TeamMemberCard 
                            image={kevin} 
                            name="Kevin Alejandro Peña Ramírez" 
                            role="Gerente de Proyectos" 
                            description="Encargado de la planificación estratégica y comunicación efectiva con los clientes."
                            socialLinks={{
                                linkedin: "#",
                                twitter: "#",
                                email: "#"
                            }}
                        />
                        <TeamMemberCard 
                            image={luis} 
                            name="Luis Miguel Tao Achicue" 
                            role="Especialista DevOps" 
                            description="Experto en despliegue de soluciones en la nube y automatización de infraestructura."
                            socialLinks={{
                                linkedin: "#",
                                github: "#",
                                email: "#"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section text-center">
                <div className="container">
                    <h2 className="display-5 fw-bold">¿Listo para transformar tu idea en realidad?</h2>
                    <p className="lead mb-4">Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos</p>
                    <a href="#" className="btn btn-light btn-lg px-4">
                        Contactar ahora 
                        <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </section>
        </div>
    );
};

const Card = ({ title, icon, description }) => (
    <div className="col-md-6 mb-4">
        <div className="card border-0 shadow-sm h-100 hover-scale">
            <div className="card-body p-4 text-center">
                <span className="icon-circle bg-primary text-white mb-3">
                    <i className={icon + " fa-2x"}></i>
                </span>
                <h3 className="h4 mb-3">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const MissionVisionCard = ({ title, icon, lead, description }) => (
    <div className="col-lg-6 mb-4">
        <div className="card bg-white h-100 hover-scale">
            <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                    <div className="icon-circle bg-primary me-3">
                        <i className={icon + " fa-lg text-white"}></i>
                    </div>
                    <h3 className="h3 mb-0 text-dark">{title}</h3>
                </div>
                <p className="lead mb-3 text-primary">{lead}</p>
                <p className="text-dark">{description}</p>
            </div>
        </div>
    </div>
);

const TeamMemberCard = ({ image, name, role, description, socialLinks }) => (
    <div className="col-md-6 col-lg-4 mb-4">
        <div className="card border-0 shadow h-100 team-card">
            <div className="team-image-container position-relative">
                <img src={image} alt={name} className="card-img-top img-fluid" />
                <div className="team-overlay d-flex align-items-center justify-content-center">
                    <div>
                        {socialLinks.linkedin && (
                            <a href={socialLinks.linkedin} className="btn btn-sm btn-light rounded-circle mx-1" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        )}
                        {socialLinks.github && (
                            <a href={socialLinks.github} className="btn btn-sm btn-light rounded-circle mx-1" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                        {socialLinks.dribbble && (
                            <a href={socialLinks.dribbble} className="btn btn-sm btn-light rounded-circle mx-1" aria-label="Dribbble">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        )}
                        {socialLinks.twitter && (
                            <a href={socialLinks.twitter} className="btn btn-sm btn-light rounded-circle mx-1" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        )}
                        {socialLinks.email && (
                            <a href={socialLinks.email} className="btn btn-sm btn-light rounded-circle mx-1" aria-label="Email">
                                <i className="fas fa-envelope"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="card-body p-4 text-center">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="text-primary mb-3">{role}</p>
                <p className="card-text text-muted">{description}</p>
            </div>
        </div>
    </div>
);

export default Conocenos;

