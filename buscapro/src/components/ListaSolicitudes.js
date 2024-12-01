import React, { useState, useEffect } from "react";
import "../styles/vistaSolicitudes.css"; 
import MiPerfil from "./MiPerfil"; 


function ListaSolicitudes({ setView }) {
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, titulo: "Solicitud 1", monto: "$1.000.000" },
    { id: 2, titulo: "Solicitud 2", monto: "$1.400.000" },
    { id: 3, titulo: "Solicitud 3", monto: "$2.300.000" },
    { id: 4, titulo: "Solicitud 4", monto: "$2.000.000" },
    { id: 5, titulo: "Solicitud 5", monto: "$1.000.300" },
    { id: 6, titulo: "Solicitud 6", monto: "$700.000" },
  ]);

  const [imagenes, setImagenes] = useState([]);
  const [perfilSeleccionado, setPerfilSeleccionado] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        setImagenes(data.results.map((user) => user.picture.large));
      })
      .catch((error) => console.error("Error al obtener las imágenes:", error));
  }, []);

  const handleClickSolicitud = (solicitud) => {
    setPerfilSeleccionado(solicitud);
  };

  return (
    <div className="vista-solicitudes">
      <div className="columna izquierda">
        <h2 className="titulo-lista">Lista de Solicitudes</h2>
        <div className="contenedor-solicitudes">
          {solicitudes.map((solicitud, index) => (
            <div
              key={solicitud.id}
              className="tarjeta-solicitud"
              onClick={() => handleClickSolicitud(solicitud)}
            >
              <div className="contenido-solicitud">
                <img
                  src={imagenes[index]}
                  alt="Imagen de persona"
                  className="imagen-solicitud"
                />
                <h3>{solicitud.titulo}</h3>
              </div>
              <div className="monto-solicitud">
                <p>{solicitud.monto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="columna derecha">
        {perfilSeleccionado ? (
          <MiPerfil solicitud={perfilSeleccionado} setView={setView} />
        ) : (
          <p className="mensaje-seleccion">
            Selecciona una solicitud para ver el perfil.
          </p>
        )}
      </div>
    </div>
  );
}

export default ListaSolicitudes;
