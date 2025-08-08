import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'; // Importamos Link para navegación sin recarga
import { FaHome, FaEnvelope, FaPlus, FaComments, FaUsers, FaSignInAlt,FaUserCircle} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Enlaces de navegación */}
      <div className="navbar-links">
        <Link to="/"><FaHome /> Inicio</Link>
        <Link to="/buzon"><FaEnvelope /> Buzón</Link>
        <Link to="/publicar"><FaPlus /> Publicar</Link>
        <Link to="/chat"><FaComments /> Chat</Link>
        <Link to="/conocenos"><FaUsers /> Conocenos</Link>
        <Link to="/perfil"><FaUserCircle /> Perfil</Link> 
        <Link to="/login"><FaSignInAlt /> Inicio de sesión</Link>

      </div>
    </nav>
  );
};
