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
import NuevaSolicitud from "./components/NuevaSolicitud";

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
      name: 'Juan Pérez',
      briefDescription: 'Un desarrollador de software.',
      fullDescription: 'Juan es un desarrollador full-stack con 5 años de experiencia en React y Node.js. Comenzó su carrera trabajando en una pequeña startup donde creó una aplicación de gestión de proyectos que ahora utilizan miles de usuarios en América Latina. Su pasión por resolver problemas lo llevó a liderar el desarrollo de soluciones innovadoras para la industria financiera en Nueva York.',
      location: 'Nueva York',
      experience: 5,
      verified: true
    },
    {
      name: 'Ana Gómez',
      briefDescription: 'Una gerente de proyectos.',
      fullDescription: 'Ana es una gerente de proyectos certificada como PMP con 10 años de experiencia en la gestión de proyectos de desarrollo de software. Tras comenzar como analista de negocios, se convirtió en una líder clave para proyectos internacionales en San Francisco. Uno de sus mayores logros fue coordinar el lanzamiento de un software de comercio electrónico que revolucionó el mercado en Europa. Es conocida por su habilidad para motivar equipos y garantizar la entrega de proyectos exitosos.',
      location: 'San Francisco',
      experience: 10,
      verified: false
    },
    {
      name: 'Alicia Fernández',
      briefDescription: 'Una diseñadora UX.',
      fullDescription: 'Alicia se especializa en la creación de interfaces fáciles de usar y ha trabajado en numerosas aplicaciones de alto perfil. Durante sus 15 años de carrera, fue responsable del diseño de la app de un banco digital líder, logrando aumentar la retención de usuarios en un 30%. Inspirada por su amor por la psicología del usuario, dicta talleres para empresas emergentes en Nueva York, ayudándolas a transformar ideas complejas en experiencias atractivas y simples.',
      location: 'Nueva York',
      experience: 15,
      verified: true
    }
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
                <Route
                  path="/nuevasolicitud"
                  element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                      <NuevaSolicitud />
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
