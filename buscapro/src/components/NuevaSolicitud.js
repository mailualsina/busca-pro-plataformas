import React, { useState } from "react";
import "../styles/nueva-solicitud.css";

const NuevaSolicitud = () => {
    const [title, setTitle] = useState("Pintor");
    const [time, setTime] = useState("3:05 PM");
    const [description, setDescription] = useState("");

    const handleCreateRequest = () => {
        alert(`Solicitud creada: ${title} - ${time} - ${description}`);
    };

    return (
        <div className="solicitud-contenedor">
            <div className="child-contenedor">
                <h3 className="header">Solicitud de profesional</h3>
                <div className="card">
                    <div className="title-container">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título"
                            className="title-input"
                        />
                        <input
                            type="text"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            placeholder="Horario"
                            className="time-input"
                        />
                    </div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Breve descripción"
                        className="description"
                    />
                    <button onClick={handleCreateRequest} className="button">
                        Crear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NuevaSolicitud;
