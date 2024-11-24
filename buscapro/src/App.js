import React, { useState } from "react";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import MiPerfil from "./components/MiPerfil";


function App() {
  const [view, setView] = useState("login");

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
      {view === "miperfil" && <MiPerfil setView={setView} />}
    </div>
  );
}

export default App;
