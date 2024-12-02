import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.jpg";
import "../styles/registro.css"

function Formulario({ setView }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setNombre] = useState("");
    const [lastname, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setTelefono] = useState("");
    const [professional, setProfessional] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let professionalValue = 0;
            if(professional != false){
                professionalValue = 1
            }
            const response = await axios.post("http://localhost:5000/api/register", { username, password, fullname, lastname, email, phone, professionalValue});
            if (response.data.success) {
                setView("login");
            } else {
                alert("Verifique los campos");
            }
        } catch (error) {
            alert("Error en el registro:"+error);
        }
    };

    return (

        <div className="container">
            <div className="container-2">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="container-1">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-3">
                        <label for="username" className="form-label">Usuario:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Contraseña:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="fullname" className="form-label">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            aria-describedby=""
                            placeholder="Nombre"
                            value={fullname}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                        <label for="lastname" className="form-label">Apellido:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder="Apellido"
                            value={lastname}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Teléfono:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Telefono"
                            value={phone}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input after-checked"
                                type="checkbox"
                                id="flexCheckDefault"
                                value={professional}
                                onChange={(e) => setProfessional(e.target.value)} />
                            <label className="form-check-label" for="flexCheckDefault">
                                Profesional
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary"> Registrarse </button>

                    <div className="mb-3">
                        <button onClick={() => setView("login")} className="btn btn-primary"> Atras </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default Formulario;
