import React, { useState } from "react";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import MiPerfil from "./components/MiPerfil";

function App() {
  const [view, setView] = useState("login");

  const users = [
    { 
      name: 'John Doe', 
      briefDescription: 'A software developer.', 
      fullDescription: 'John is a full-stack developer with 5 years of experience in React and Node.js.', 
      location: 'New York', 
      experience: 5, 
      verified: true 
    },
    { 
      name: 'Jane Smith', 
      briefDescription: 'A project manager.', 
      fullDescription: 'Jane is a certified PMP with 10 years of experience in managing software development projects.', 
      location: 'San Francisco', 
      experience: 10, 
      verified: false 
    },
    { 
      name: 'Alice Johnson', 
      briefDescription: 'A UX designer.', 
      fullDescription: 'Alice specializes in creating user-friendly interfaces and has worked on numerous high-profile apps.', 
      location: 'New York', 
      experience: 15, 
      verified: true 
    },
  ];

  return (
    <div>
      {view === "login" && <Login setView={setView}/>}
      {view === "fomulario" && <Formulario setView={setView} />}
      {view === "register" && <Register setView={setView} />}
      {view === "home" && (
        <div style={{  height: "100vh" }}>
          <Navbar />
          <UserList users ={users}/>
        </div>
      )}
      {view === "miperfil" && <MiPerfil setView={setView} />}
    </div>
  );
}

export default App;
