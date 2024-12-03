import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/menu.css";

export default function Menu({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> <img id="logo" src={logo} alt="Logo"/> </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/miPerfil"><i className="fas fa-user"></i> Mi Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listasolicitudes"><i className="fas fa-list"></i> Solicitudes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listausuarios"><i className="fas fa-users"></i> Profesionales</Link>
            </li>
          </ul>
          
          <button className="btn" onClick={onLogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
        </div>
      </div>
    </nav>
  );
}
