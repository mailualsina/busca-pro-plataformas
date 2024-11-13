import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  const [view, setView] = useState("login");

  return (
    <div>
      {view === "login" && <Login setView={setView} />}
      {view === "register" && <Register setView={setView} />}
      {view === "home" && (
        <div style={{ backgroundColor: "blue", height: "100vh" }}>
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default App;
