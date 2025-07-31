import React from 'react';
import './Publication.css';

export const Publication = () => {
  return (
    <div className="publication-form-container">
      <div className="container">
        <div className="header-section">
          <div className="header-content">
            <h1 className="page-title">Nueva Publicación</h1>
          </div>
          <p className="page-subtitle">
            Comparte información sobre un desastre en tu zona
          </p>
        </div>

        <div className="form-card">
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="title">Título</label>
                  <input type="text" id="title" placeholder="Título de la publicación" />
                </div>

                <div className="form-group">
                  <label htmlFor="disaster_type">Tipo de desastre</label>
                  <select id="disaster_type">
                    <option value="">Seleccionar tipo</option>
                    <option value="inundacion">Inundación</option>
                    <option value="incendio">Incendio</option>
                    <option value="terremoto">Terremoto</option>
                    <option value="deslizamiento">Deslizamiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="severity">Severidad</label>
                  <select id="severity">
                    <option value="">Seleccionar severidad</option>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Ubicación</label>
                  <input type="text" id="location" placeholder="Ej: Zona Norte, Ciudad" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category_id">Categoría</label>
                <select id="category_id">
                  <option value="">Seleccionar categoría</option>
                  <option value="1">Emergencia</option>
                  <option value="2">Alerta</option>
                  <option value="3">Reporte ciudadano</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                  id="description"
                  rows="5"
                  placeholder="Describe lo sucedido..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="image">Imagen</label>
                <input type="file" id="image" accept="image/*" />
                <div className="form-text">Opcional. Tamaño máximo: 2MB</div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  <i className="fas fa-paper-plane"></i> Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


