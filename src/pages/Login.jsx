import React from 'react';

import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <p>Escribe tu correo y contraseña</p>

      <form className="login-form">
        <label>Correo</label>
        <input type="email" placeholder="tucorreo@gmail.com" required />

        <label>Contraseña</label>
        <input type="password" placeholder="********" required />

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Recordarme
          </label>
          <a className='OLV' href="#">¿Olvidaste tu clave?</a>
        </div>

        <button type="submit">Entrar</button>
      </form>

      <div className="login-footer">
        ¿No tienes cuenta? <a href="/register">Regístrate</a>
      </div>
    </div>
  );
};

export default Login;
