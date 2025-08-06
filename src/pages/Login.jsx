import React, { useEffect, useState } from 'react';
import './Login.css';

const videos = [

  '/videos/derrumbe.mp4',
  '/videos/incendio.mp4',
  '/videos/tormenta.mp4'
];

const Login = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Cambia el video cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-login-wrapper">
      {/* Video de fondo */}
      <video
        key={currentVideo}
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Formulario */}
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <p>Escribe tu correo y contraseña</p>

        <form className="login-form">
          <label>Correo</label>
          <input type="email" placeholder="tucorreo@gmail.com" required />

          <label>Contraseña</label>
          <input type="password" placeholder="********" required />

          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recordarme</label>
            </div>
            <a className="OLV" href="#">¿Olvidaste tu clave?</a>
          </div>


          <button type="submit">Entrar</button>
        </form>

        <div className="login-footer">
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
