import React, { useState } from "react";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import MiPerfil from "./components/MiPerfil";
import ListaSolicitudes from "./components/ListaSolicitudes";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Error404 from "./components/Error404";
import Menu from "./components/Menu";

function App() {
  const [view, setView] = useState("login");

  return (

    <BrowserRouter> 
    <Menu />
      <div>
        {view === "home" && <Navbar />}
        
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/register" element={<Register />} />
          <Route path="/miPerfil" element={<MiPerfil />} />
          <Route path="/listasolicitudes" element={<ListaSolicitudes />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
