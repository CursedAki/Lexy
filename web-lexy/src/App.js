import Home from "./Screens/Home";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './Components/chatBot'
function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar siempre visible */}
        <Navbar />

        {/* Definición de las rutas */}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <HowWeWork />
              <Benefits />
              <Contact />
            </>
          } />

          {/* Ruta exclusiva para el Chatbot */}
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
