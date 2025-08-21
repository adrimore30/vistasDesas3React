/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useRef } from 'react';
import './UserProfile.css';
import { FaCamera, FaImage, FaTrash, FaUser, FaCheckCircle } from 'react-icons/fa';

const videos = [
  '/videos/derrumbe.mp4',
  '/videos/incendio.mp4',
  '/videos/tormenta.mp4'
];

const veredasDisponibles = [
  'Vereda San Rafael', 'Vereda San Diego', 'Vereda El Triunfo', 'Vereda La Primavera',
  'Vereda El Rosal', 'Vereda La Esperanza', 'Vereda Los Pinos', 'Vereda San Antonio',
  'Vereda El Paraíso', 'Vereda El Carmen', 'Vereda El Roble', 'Vereda La Palma',
  'Vereda Santa Rosa', 'Vereda El Placer', 'Vereda La Cumbre', 'Vereda Las Delicias',
  'Vereda La Floresta', 'Vereda Los Ángeles', 'Vereda La Unión', 'Vereda Monteverde',
  'Vereda Alto Bonito', 'Vereda El Edén', 'Vereda Campo Hermoso', 'Vereda La Loma',
  'Vereda Las Brisas', 'Vereda El Jardín', 'Vereda Bella Vista', 'Vereda El Mirador',
  'Vereda San José', 'Vereda La Ceiba', 'Vereda El Progreso', 'Vereda El Nogal'
];

const UserProfile = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    vereda: '',
    password: '',
    foto: null,
  });

  const [preview, setPreview] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [editable, setEditable] = useState(false);

  const fileInputRef = useRef(null);

  /* Fondo con cambio de video */
  useEffect(() => {
    const interval = setInterval(() => setCurrentVideo(v => (v + 1) % videos.length), 10000);
    return () => clearInterval(interval);
  }, []);

  /* Datos mock */
  useEffect(() => {
    const mockData = {
      nombre: 'Michelle',
      apellido: 'Jimenez',
      email: 'michelle@gmail.com',
      telefono: '3012236302',
      direccion: 'Morales',
      vereda: 'Vereda San Diego',
      foto: null,
    };
    setUserData(mockData);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setUserData(prev => ({ ...prev, foto: file }));
    }
  };

  const handleRemovePhoto = () => {
    setPreview(null);
    setUserData(prev => ({ ...prev, foto: null }));
  };

  const handleSubmit = () => {
    setShowConfirm(false);
    console.log('Datos guardados:', userData);
    setSaved(true);
    setEditable(false);
    setTimeout(() => setSaved(false), 3000);
  };

  const enableEdit = () => {
    setEditable(true);
  };

  return (
    <div className="video-profile-wrapper">
      <video key={currentVideo} autoPlay loop muted className="background-video">
        <source src={videos[currentVideo]} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Modal de confirmación */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>¿Estás seguro de guardar los cambios?</h3>
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handleSubmit}>Sí, guardar</button>
              <button className="btn-cancel" onClick={() => setShowConfirm(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Mensaje de éxito */}
      {saved && (
        <div className="toast-success">
          <FaCheckCircle /> Cambios guardados
        </div>
      )}

      <div className="profile-container">
        <h2>Perfil de Usuario</h2>
        <p>Administra tu información personal</p>

        <form className="profile-form" onSubmit={e => e.preventDefault()}>
          <label>Nombre</label>
          <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} disabled={!editable} />

          <label>Apellido</label>
          <input type="text" name="apellido" value={userData.apellido} onChange={handleChange} disabled={!editable} />

          <label>Correo</label>
          <input type="email" name="email" value={userData.email} disabled />

          <label>Teléfono</label>
          <input type="tel" name="telefono" value={userData.telefono} onChange={handleChange} disabled={!editable} />

          <label>Dirección</label>
          <input type="text" name="direccion" value={userData.direccion} onChange={handleChange} disabled={!editable} />

          <label>Vereda</label>
          <select name="vereda" value={userData.vereda} onChange={handleChange} disabled={!editable}>
            <option value="">Selecciona una vereda</option>
            {veredasDisponibles.map(v => <option key={v} value={v}>{v}</option>)}
          </select>

          <label>Contraseña</label>
          <input type="password" name="password" placeholder="******" onChange={handleChange} disabled={!editable} />

          {/* FOTO */}
          <label>Foto de perfil</label>
          <div className="photo-section">
            <div className="circle-image" onClick={() => editable && fileInputRef.current?.click()}>
              {preview ? <img src={preview} alt="perfil" /> : <FaUser className="default-user-icon" />}
            </div>

            <div className="photo-actions">
              <div onClick={() => editable && document.getElementById('cameraInput').click()}>
                <FaCamera /><span>Cámara</span>
              </div>
              <div onClick={() => editable && document.getElementById('galleryInput').click()}>
                <FaImage /><span>Galería</span>
              </div>
              <div onClick={() => editable && handleRemovePhoto()}>
                <FaTrash /><span>Eliminar</span>
              </div>
            </div>

            <input type="file" id="cameraInput" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={handleImageChange} />
            <input type="file" id="galleryInput" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} ref={fileInputRef} />
          </div>

          {editable ? (
            <button type="button" onClick={() => setShowConfirm(true)}>Guardar cambios</button>
          ) : (
            <button type="button" onClick={enableEdit}>Editar información</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;