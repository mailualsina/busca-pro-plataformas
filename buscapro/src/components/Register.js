import React, { useState } from "react";
import axios from "axios";

function Register({ setView }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        password,
        email
      });
      if (response.data.success) {
        alert("Registration successful!");
        setView("login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
      <button onClick={() => setView("login")}>Atras</button>
    </div>
  );
}

export default Register;
