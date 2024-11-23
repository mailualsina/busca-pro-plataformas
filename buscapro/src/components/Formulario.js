import React, { useState } from "react";
import axios from "axios";
import "../styles/formulario.css";
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

        <div class="container">
            <div class="container-2">
                <img class="logo" src={logo} alt="Logo"/>
            </div>


            <div class="container-1">
                <form onSubmit={handleSubmit} class="form">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            aria-describedby=""
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido:</label>
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input
                            type="email"
                            class="form-control"
                            id=""
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Teléfono:</label>
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Telefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary"> Ingresar </button>

                    <div class="mb-3">
                        <button onClick={() => setView("register")}class="btn btn-primary"> Registrarse </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Formulario;
