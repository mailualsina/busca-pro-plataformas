import React, { useState } from "react";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import MiPerfil from "./components/MiPerfil";

import ListaSolicitudes from "./components/ListaSolicitudes";


function App() {
  const [view, setView] = useState("listasolicitudes");

  return (
    <div>
      {view === "login" && <Login setView={setView}/>}
      {view === "fomulario" && <Formulario setView={setView} />}
      {view === "register" && <Register setView={setView} />}
      {view === "home" && (
        <div style={{ backgroundColor: "blue", height: "100vh" }}>
          <Navbar />
        </div>
      )}
     {view === "miPerfil" && <MiPerfil setView={setView} />} 
      {view === "listasolicitudes" && <ListaSolicitudes setView={setView} />}


    </div>
  );
}

export default App;
