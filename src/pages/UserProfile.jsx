import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { FaCamera, FaImage, FaTrash, FaUserCircle } from 'react-icons/fa';

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

  useEffect(() => {
    const mockData = {
      nombre: 'Elynn',
      apellido: 'Lee',
      email: 'michelle.@sada.exa',
      telefono: '30122359878',
      direccion: 'Morales',
      vereda: 'Vereda San Diego',
      foto: null,
    };
    setUserData(mockData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      setUserData({ ...userData, foto: file });
    }
  };

  const handleRemovePhoto = () => {
    setPreview(null);
    setUserData({ ...userData, foto: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos guardados:', userData);
    // Aquí puedes enviar los datos al servidor con fetch o axios
  };

  return (
    <div className="profile-page-background">
      <div className="profile-container">
        <h2>Perfil de Usuario</h2>
        <p>Administra tu información personal</p>

        <form className="profile-form" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} />

          <label>Apellido</label>
          <input type="text" name="apellido" value={userData.apellido} onChange={handleChange} />

          <label>Correo</label>
          <input type="email" name="email" value={userData.email} disabled />

          <label>Teléfono</label>
          <input type="tel" name="telefono" value={userData.telefono} onChange={handleChange} />

          <label>Dirección</label>
          <input type="text" name="direccion" value={userData.direccion} onChange={handleChange} />

          <label>Vereda</label>
          <select name="vereda" value={userData.vereda} onChange={handleChange}>
            <option value="">Selecciona una vereda</option>
            {veredasDisponibles.map((vereda, index) => (
              <option key={index} value={vereda}>{vereda}</option>
            ))}
          </select>

          <label>Contraseña</label>
          <input type="password" name="password" placeholder="******" onChange={handleChange} />

          <label>Foto</label>
          <div className="photo-section">
            <div className="photo-preview-block">
              {preview ? (
                <img src={preview} alt="Foto perfil" className="photo-preview" />
              ) : (
                <div className="photo-placeholder"><FaUserCircle size={50} /></div>
              )}
              <p>Editar</p>
            </div>

            <div className="photo-actions">
              <div onClick={() => document.getElementById('cameraInput').click()}>
                <FaCamera />
                <p>Cámara</p>
              </div>

              <div onClick={() => document.getElementById('galleryInput').click()}>
                <FaImage />
                <p>Galería</p>
              </div>

              <div onClick={handleRemovePhoto}>
                <FaTrash />
                <p>Eliminar</p>
              </div>
            </div>

            {/* Inputs ocultos */}
            <input
              type="file"
              id="cameraInput"
              accept="image/*"
              capture="environment"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <input
              type="file"
              id="galleryInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>

          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
