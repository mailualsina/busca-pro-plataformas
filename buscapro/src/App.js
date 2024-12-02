import React, { useState } from "react";
import Login from "./components/Login";
import Formulario from "./components/Formulario";
import UserList from "./components/UserList";
import MiPerfil from "./components/MiPerfil";
import ListaSolicitudes from "./components/ListaSolicitudes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Menu from "./components/Menu";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [view, setView] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
        <BrowserRouter>
          {!isLoggedIn ? (
            <>
              {view === "login" && <Login key="login" setView={setView} onLogin={handleLogin} />}
              {view === "formulario" && <Formulario key="formulario" setView={setView} />}
            </>
          ) : (
            <div style={{ height: "100vh" }}>
              <Menu onLogout={handleLogout} />
              <Routes>
                <Route path="/" element={<MiPerfil />} />
    
                <Route
                  path="/miPerfil"
                  element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                      <MiPerfil />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/listasolicitudes"
                  element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                      <ListaSolicitudes />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/listausuarios"
                  element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                      <UserList users={users} />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }

export default App;
