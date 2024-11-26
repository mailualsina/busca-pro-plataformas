import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import logo from "../assets/logo.jpg";

function Login({ setView }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", { username, password });
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
                        <label for="usuario" class="form-label">Usuario:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="usuario"
                            aria-describedby=""
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>
                    <div class="mb-3">
                        <label for="contrasena" class="form-label">Contraseña:</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary"> Ingresar </button>

                    <div class="mb-3">
                        <p id="redirect_crearCuenta">No tiene cuenta? </p>
                        <button onClick={() => setView("register")}class="btn btn-primary"> Registrarse </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Login;