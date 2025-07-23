import React, { useState } from 'react';
import './Register.css';


const Register = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
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
        <input type="file" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <img
              src={preview}
              alt="Foto"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #91e0a7',
                marginTop: '10px'
              }}
            />
          </div>
        )}

        <button type="submit">Crear cuenta</button>
      </form>

      <div className="register-footer">
        ¿Ya tienes cuenta? <a href="/login">Entrar</a>
      </div>
    </div>
  );
};

export default Register;
