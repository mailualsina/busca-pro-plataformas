import React, { useState } from "react";
import "../styles/MiPerfil.css";

function MiPerfil({ setView }) {
  const [editMode, setEditMode] = useState(false);
  const [breveResumen, setBreveResumen] = useState(
    "Arquitecto con 5 años de experiencia en diseño arquitectónico y urbanismo."
  );
  const [experienciaLaboral, setExperienciaLaboral] = useState(
    `Especializado en proyectos sostenibles y de baja energía.
    Con un profundo conocimiento de software de diseño asistido por computadora (CAD) y modelado de información de construcción (BIM),
    he desarrollado una pasión por crear espacios innovadores que minimicen su impacto ambiental.
    Mis proyectos se centran en la integración de tecnologías verdes, la optimización del uso de recursos y la creación de entornos saludables y eficientes.`
  );

  const handleSave = () => {
    setEditMode(false);
    console.log("Cambios guardados:", { breveResumen, experienciaLaboral });
  };

  return (
    <div className="mi-perfil">
      <h2 className="mi-perfil-titulo">Mi perfil</h2>

      {/* Contenedor principal con dos columnas */}
      <div className="mi-perfil-contenido">
        {/* Columna izquierda: info personal */}
        <div className="informacion-personal">
          <img
            src="https://images.imagenmia.com/example_images/1727636988080-30ea216f-249f-4cad-b3f8-44e75ffca4d4.webp"
            alt="Foto de perfil"
            className="foto-perfil"
          />
          <h3 className="nombre-usuario">Javier Dante, Lopez</h3>
          <div className="campo-editar">
            <label>Breve resumen:</label>
            {editMode ? (
              <input
                type="text"
                value={breveResumen}
                onChange={(e) => setBreveResumen(e.target.value)}
              />
            ) : (
              <p>{breveResumen}</p>
            )}
          </div>
          <div className="campo-editar">
            <label>Experiencia laboral:</label>
            {editMode ? (
              <textarea
                value={experienciaLaboral}
                onChange={(e) => setExperienciaLaboral(e.target.value)}
              ></textarea>
            ) : (
              <p>{experienciaLaboral}</p>
            )}
          </div>
        </div>

        {/* Columna derecha: puntaje y botones */}
        <div className="puntaje-y-botones">
          <div className="puntaje">
            <p>Puntaje: 100</p>
          </div>
          <div className="botones">
            <button onClick={editMode ? handleSave : () => setEditMode(true)}>
              {editMode ? "Guardar cambios" : "Editar perfil"}
            </button>
            <button onClick={() => setView("home")}>Volver al inicio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiPerfil;
