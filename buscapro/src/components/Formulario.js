import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.jpg";

function Formulario({ setView }) {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/formulario", { nombre, apellido, email, telefono});
            if (response.data.success) {
                setView("home");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            alert("Error logging in");
        }
    };

    return (

        <div className="container">
            <div className="container-2">
                <img className="logo" src={logo} alt="Logo"/>
            </div>


            <div className="container-1">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            aria-describedby=""
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label for="apellido" className="form-label">Apellido:</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id=""
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="apellido" className="form-label">Teléfono:</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder="Telefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"> Ingresar </button>

                    <div className="mb-3">
                        <button onClick={() => setView("register")}className="btn btn-primary"> Registrarse </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Formulario;
