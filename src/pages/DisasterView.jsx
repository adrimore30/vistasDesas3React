

import './DisasterView.css';

import derrumbe from '../assets/derrumbe.jpg';
import incendio from '../assets/incendio.jpg';
import tormenta from '../assets/tormenta.jpg';
import inundacion from '../assets/inundacion.jpg';
import bomberos from '../assets/bomberos.jpg';
import hospital from '../assets/hospital.jpg';
import defensa from '../assets/defensacivil.jpg';
import ungrd from '../assets/ungrd.png';

export default function DisasterView() {
  return (
    <div className="disaster-view">
     

      {/* Sección de íconos de desastres */}
      <section className="disaster-icons">
        <img src={derrumbe} alt="Derrumbe" />
        <img src={incendio} alt="Incendio" />
        <img src={tormenta} alt="Tormenta Eléctrica" />
        <img src={inundacion} alt="Inundación" />
      </section>

      {/* Botón 3D central */}
      <section className="report-section">
        <h2>Informar</h2>
        <button className="report-button">🚨 Reportar Emergencia</button>
      </section>

      {/* Entidades de respuesta */}
      <section className="entities-section">
        <img src={bomberos} alt="Bomberos" />
        <img src={hospital} alt="Hospital" />
        <img src={defensa} alt="Defensa Civil" />
        <img src={ungrd} alt="UNGRD" />
      </section>

      
    </div>
  );
}
