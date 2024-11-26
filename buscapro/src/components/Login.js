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

        <div className="container">
            <div className="container-2">
                <img className="logo" src={logo} alt="Logo"/>
            </div>


            <div className="container-1">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label for="usuario" className="form-label">Usuario:</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            aria-describedby=""
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label for="contrasena" className="form-label">Contraseña:</label>
                        <input
                            type="password"
                            className="form-control"
                            id=""
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"> Ingresar </button>

                    <div className="mb-3">
                        <p id="redirect_crearCuenta">No tiene cuenta? </p>
                        <button onClick={() => setView("register")}className="btn btn-primary"> Registrarse </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Login;