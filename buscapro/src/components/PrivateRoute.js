import React from "react";
import { Navigate } from "react-router-dom";

//Para salir del paso en esta entrega se utilizo esta tecnica para renderizar en el DOM los hijos del 
//componente dependiendo del valor boolean definido en App.js y enviado por parametro junto con el default prop 'children' 

//TODO - Remplazar por React Context?
const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;