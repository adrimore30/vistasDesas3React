import './Navbar.css';
import { FaHome, FaEnvelope, FaPlus, FaComments, FaUsers, FaSignInAlt } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#"><FaHome /> Inicio</a>
        <a href="#"><FaEnvelope /> Buzón</a>
        <a href="#"><FaPlus /> Publicar</a>
        <a href="#"><FaComments /> Chat</a>
        <a href="#"><FaUsers /> Conócenos</a>
        <a href="#"><FaSignInAlt /> Inicio de sesión</a>
      </div>
    </nav>
  );
};
