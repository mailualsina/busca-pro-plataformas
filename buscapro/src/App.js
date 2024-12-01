import React, { useState } from "react";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import UserList from "./components/UserList";
import MiPerfil from "./components/MiPerfil";
import ListaSolicitudes from "./components/ListaSolicitudes";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Error404 from "./components/Error404";
import Menu from "./components/Menu";

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
      {view === "formulario" && <Formulario setView={setView} />}
      {view === "home" && (
        <div style={{  height: "100vh" }}>
          <BrowserRouter> 
          <Menu />
            <div>
              <Routes> 
                <Route path="/" element={<Login />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/register" element={<Formulario />} />
                <Route path="/miPerfil" element={<MiPerfil />} />
                <Route path="/listasolicitudes" element={<ListaSolicitudes />} />
                <Route path="/listausuarios" element={<UserList users ={users} />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          </BrowserRouter>
          <UserList users ={users}/>
        </div>
      )}
      {view === "miperfil" && <MiPerfil setView={setView} />}
    </div>
  );
}

export default App;
