import React, { useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
