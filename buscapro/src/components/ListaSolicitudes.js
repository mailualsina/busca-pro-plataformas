import React, { useState, useEffect } from "react";
import "../styles/vistaSolicitudes.css"; 
import DetallesSolicitud from "./DetallesSolicitud";


function ListaSolicitudes() {
  const [solicitudes] = useState([
    { id: 1, titulo: "Solicitud 1 - Ingeniero industrial", monto: "$1.000.000" },
    { id: 2, titulo: "Solicitud 2 - Arquitecto", monto: "$1.400.000" },
    { id: 3, titulo: "Solicitud 3 - Analista de datos", monto: "$2.300.000" },
    { id: 4, titulo: "Solicitud 4 - Ingeniero civil", monto: "$1.000.300" },
    { id: 5, titulo: "Solicitud 5 - Operario industrial", monto: "$700.000" },
    { id: 6, titulo: "Solicitud 6 - Biologo", monto: "$1.300.000" },

  ]);

  const [solicitudesExtendidas, setSolicitudesExtendidas] = useState([]);
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null);


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        const personas = data.results.map((user, index) => ({
          ...solicitudes[index],
          nombre: `${user.name.first} ${user.name.last}`,
          imagen: user.picture.large,
        }));
        console.log(personas);
        setSolicitudesExtendidas(personas);
      })
      .catch((error) => console.error("Error al obtener datos de la API:", error));
  }, [solicitudes]);

  const handleCloseDetalles = () => {
    setSolicitudSeleccionada(null); 
  };

  return (
    <div className="vista-solicitudes">
    
      <div className="columna izquierda">
        <h2 className="titulo-lista">Lista de Solicitudes</h2>
        <div className="contenedor-solicitudes">
          {solicitudesExtendidas.map((solicitud) => (
            <div
              key={solicitud.id}
              className="tarjeta-solicitud transRight"
              onClick={() => setSolicitudSeleccionada(solicitud)}
            >
              <div className="contenido-solicitud">
                <img
                  src={solicitud.imagen}
                  alt="Imagen de persona"
                  className="imagen-solicitud"
                />
                <h3>{solicitud.titulo}</h3>
              </div>
              <div className="monto-solicitud">
                <p>{solicitud.monto}</p>
                <p className="nombre-solicitante">{solicitud.nombre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="columna derecha">
        {solicitudSeleccionada ? (
          <DetallesSolicitud
            solicitud={solicitudSeleccionada}
            onClose={handleCloseDetalles}
          />
        ) : (
          <p className="mensaje-seleccion">Selecciona una solicitud para ver los detalles.</p>
        )}
      </div>
    </div>
  );
}

export default ListaSolicitudes;
