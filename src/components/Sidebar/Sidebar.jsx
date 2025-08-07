import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFireExtinguisher,
  FaHeadset,
  FaShieldAlt,
  FaHospitalAlt,
  FaCross
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menú</h2>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FaHome className="sidebar-icon" /> Inicio
        </Link>
        <Link to="/chat?chat=general" className="sidebar-link">
          <FaHeadset className="sidebar-icon" /> Soporte General
        </Link>
        <Link to="/chat?chat=bomberos" className="sidebar-link">
          <FaFireExtinguisher className="sidebar-icon" /> Bomberos
        </Link>
        <Link to="/chat?chat=defensa-civil" className="sidebar-link">
          <FaShieldAlt className="sidebar-icon" /> Defensa Civil
        </Link>
        <Link to="/chat?chat=udgr" className="sidebar-link">
          <FaHospitalAlt className="sidebar-icon" /> UDGR
        </Link>
        <Link to="/chat?chat=cruz-roja" className="sidebar-link">
          <FaCross className="sidebar-icon" /> Cruz Roja
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
