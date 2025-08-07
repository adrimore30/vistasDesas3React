import React, { useState, useEffect } from 'react';
import './Publication.css';

export const Publication = () => {
  const [form, setForm] = useState({
    title: '',
    type: '',
    severity: '',
    location: '',
    description: '',
    image: null,
  });

  const [filters, setFilters] = useState({
    title: '',
    type: '',
    severity: '',
    location: ''
  });

  const [appliedFilters, setAppliedFilters] = useState({
    title: '',
    type: '',
    severity: '',
    location: ''
  });

  const [publications, setPublications] = useState([]);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('publications');
    if (saved) {
      setPublications(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.type || !form.severity || !form.location || !form.description) {
      setMessage('Por favor completa todos los campos obligatorios.');
      return;
    }

    if (editingId) {
      const updatedPublications = publications.map(pub =>
        pub.id === editingId
          ? {
              ...form,
              id: editingId,
              imagePreview: form.image ? URL.createObjectURL(form.image) : pub.imagePreview,
              date: pub.date
            }
          : pub
      );
      setPublications(updatedPublications);
      localStorage.setItem('publications', JSON.stringify(updatedPublications));
      setEditingId(null);
      setMessage('¡Publicación actualizada!');
    } else {
      const newPublication = {
        ...form,
        id: Date.now(),
        imagePreview: form.image ? URL.createObjectURL(form.image) : null,
        date: new Date().toLocaleDateString()
      };

      const updated = [newPublication, ...publications];
      setPublications(updated);
      localStorage.setItem('publications', JSON.stringify(updated));
      setMessage('¡Publicación guardada!');
    }

    setForm({ title: '', type: '', severity: '', location: '', description: '', image: null });
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEdit = (pub) => {
    setForm({
      title: pub.title,
      type: pub.type,
      severity: pub.severity,
      location: pub.location,
      description: pub.description,
      image: null
    });
    setEditingId(pub.id);
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    const filtered = publications.filter(pub => pub.id !== id);
    setPublications(filtered);
    localStorage.setItem('publications', JSON.stringify(filtered));
  };

  const handleFilterInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  const clearFilters = () => {
    setFilters({ title: '', type: '', severity: '', location: '' });
    setAppliedFilters({ title: '', type: '', severity: '', location: '' });
  };

  const filteredPublications = publications.filter((pub) => {
    return (
      pub.title.toLowerCase().includes(appliedFilters.title.toLowerCase()) &&
      pub.type.toLowerCase().includes(appliedFilters.type.toLowerCase()) &&
      pub.severity.toLowerCase().includes(appliedFilters.severity.toLowerCase()) &&
      pub.location.toLowerCase().includes(appliedFilters.location.toLowerCase())
    );
  });

  return (
    <div className="publication-form-container">
      <div className="container">
        <h1 className="page-title">{editingId ? 'Editar Publicación' : 'Nueva Publicación'}</h1>

        {/* FORMULARIO */}
        <div className="form-card mb-5">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Título *</label>
                <input type="text" id="title" value={form.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Tipo *</label>
                <select id="type" value={form.type} onChange={handleChange}>
                  <option value="">Seleccionar</option>
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
                <label>Severidad *</label>
                <select id="severity" value={form.severity} onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
              </div>
              <div className="form-group">
                <label>Ubicación *</label>
                <input type="text" id="location" value={form.location} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Descripción *</label>
              <textarea id="description" rows="4" value={form.description} onChange={handleChange}></textarea>
            </div>

            <div className="form-group">
              <label>Imagen (opcional)</label>
              <input type="file" id="image" accept="image/*" onChange={handleFileChange} />
            </div>

            {message && <div className="alert alert-info mt-2">{message}</div>}

            <div className="form-actions">
              <button type="reset" className="btn-secondary">Cancelar</button>
              <button type="submit" className="btn-primary">
                {editingId ? 'Actualizar' : 'Publicar'}
              </button>
            </div>
          </form>
        </div>

        {/* FILTROS */}
        <div className="card filter-card mb-5">
          <div className="card-body">
            <h4 className="mb-4">🔍 Filtros de búsqueda</h4>
            <div className="row g-3">
              <div className="col-md-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Título"
                  value={filters.title}
                  onChange={handleFilterInputChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterInputChange}
                  className="form-control"
                >
                  <option value="">Tipo</option>
                  <option value="inundacion">Inundación</option>
                  <option value="incendio">Incendio</option>
                  <option value="terremoto">Terremoto</option>
                  <option value="deslizamiento">Deslizamiento</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="col-md-3">
                <select
                  name="severity"
                  value={filters.severity}
                  onChange={handleFilterInputChange}
                  className="form-control"
                >
                  <option value="">Severidad</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="location"
                  placeholder="Ubicación"
                  value={filters.location}
                  onChange={handleFilterInputChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mt-3 d-flex gap-2">
              <button className="btn btn-primary" onClick={applyFilters}>Filtrar</button>
              <button className="btn btn-secondary" onClick={clearFilters}>Limpiar filtros</button>
            </div>
          </div>
        </div>

        {/* PUBLICACIONES */}
        <h2 className="text-white mb-4">📌 Publicaciones guardadas</h2>
        <div className="row g-4">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                {pub.imagePreview ? (
                  <img
                    src={pub.imagePreview}
                    className="card-img-top"
                    alt={pub.title}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                ) : (
                  <div className="card-img-top bg-secondary d-flex align-items-center justify-content-center" style={{ height: 200 }}>
                    <i className="fas fa-image fa-3x text-white-50"></i>
                  </div>
                )}
                <div className="card-body">
                   <h5 className="card-title">{pub.title}</h5>
                   <p className="card-text">{pub.description}</p>
                   <small className="text-muted">
                      {pub.type} - {pub.severity} | {pub.location} | {pub.date}
                     </small>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-sm btn-warning" onClick={() => handleEdit(pub)}>Editar</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(pub.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          {filteredPublications.length === 0 && (
            <p className="text-white-50">No hay publicaciones que coincidan.</p>
          )}
        </div>
      </div>
    </div>
  );
};