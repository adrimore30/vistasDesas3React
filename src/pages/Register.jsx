import React, { useState, useEffect, useRef } from 'react';
import './Register.css';
import { FaUser } from 'react-icons/fa'; // Instala si no lo tienes con: npm install react-icons

const videos = [
  '/videos/derrumbe.mp4',
  '/videos/incendio.mp4',
  '/videos/tormenta.mp4'
];

const Register = () => {
  const [preview, setPreview] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCircleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="video-register-wrapper">
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

      <div className="register-container">
        <h2>Registrarse</h2>
        <p>Llene los datos para crear tu cuenta</p>

        <form className="register-form">
          <label>Nombre</label>
          <input type="text" placeholder="Nombre completo" required />

          <label>Correo</label>
          <input type="email" placeholder="ejemplo@gmail.com" required />

          <label>Teléfono</label>
          <input type="tel" placeholder="Número celular" required />

          <label>Contraseña</label>
          <input type="password" placeholder="******" required />

          <label>Repetir contraseña</label>
          <input type="password" placeholder="******" required />

          <label>Foto de tu rostro</label>
          <div className="circle-image" onClick={handleCircleClick}>
            {preview ? (
              <img src={preview} alt="Foto" />
            ) : (
              <FaUser className="default-user-icon" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
            required
          />

          <button type="submit">Crear cuenta</button>
        </form>

        <div className="register-footer">
          ¿Ya tienes cuenta? <a href="/login">Entrar</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
