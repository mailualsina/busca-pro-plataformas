import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BuscaPro</Link>
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
              <Link className="nav-link" to="/miPerfil">Mi Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listasolicitudes">Solicitudes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listausuarios">Profesionales</Link>
            </li>
          </ul>
          <button className="btn" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}
