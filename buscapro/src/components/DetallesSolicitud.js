import React, { useState, useEffect } from "react";
import "../styles/detallesSolicitud.css";

const DescripcionesProfesiones = {
  "Ingeniero industrial": "Encargado de optimizar procesos industriales para mejorar la productividad.",
  "Arquitecto": "Diseña y supervisa la construcción de edificaciones funcionales y estéticas.",
  "Analista de datos": "Transforma datos complejos en información valiosa para la toma de decisiones.",
  "Biologo": "Estudia organismos vivos y su interacción con el medio ambiente.",
  "Ingeniero civil": "Diseña y supervisa la construcción de infraestructuras como puentes y edificios.",
  "Operario industrial": "Maneja equipos y procesos en entornos industriales para asegurar la producción."
};

function DetallesSolicitud({ solicitud, onClose }) {
  const [puntaje, setPuntaje] = useState(0);

  useEffect(() => {
    if (solicitud) {
      // generates random score when changing request
      const puntajeAleatorio = Math.floor(Math.random() * 51) + 55;
      setPuntaje(puntajeAleatorio);
    }
  }, [solicitud]); // run every time the request changes

  if (!solicitud) return null;

  const descripcionProfesion = DescripcionesProfesiones[solicitud.titulo.split(" - ")[1]];

  return (
    <div className="detalles-solicitud">
      <button className="boton-cerrar" onClick={onClose}>
        X
      </button>
      <h2>{solicitud.titulo}</h2>
      <p>
        <strong>Descripción:</strong> {descripcionProfesion}
      </p>
      <p>
        <strong>Monto:</strong> {solicitud.monto}
      </p>
      <div className="acciones">
        <span className="puntaje">Puntaje: {puntaje}</span>
        <button className="boton-enviar">Contactar</button>
      </div>
    </div>
  );
}

export default DetallesSolicitud;
