import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulamos una llamada a API
    setTimeout(() => {
      setProjects([
        {
    id: 1,
    titulo: "ELPALOMAR — Sistema de Gestión Deportiva",
    descripcion:
      "Proyecto Full Stack que evolucionó desde una maqueta estática hasta el desarrollo frontend con Angular y backend con Django y API REST.",
    tecnologias: "Angular · Ts · Django · Python · API REST · MySQL",
    github: "https://github.com/El-palomar/ElPalomar",
    demo: "",
  },
  {
    id: 2,
    titulo: "Glamping – Sitio Web Turístico",
    descripcion:
      "Sitio web responsive para un complejo de cabañas alpinas en las sierras de Córdoba, enfocado en diseño visual, estructura clara y experiencia del usuario.",
    tecnologias: "HTML · CSS · Bootstrap · JavaScript",
    github: "https://github.com/marialis19/Glamping",
    demo: "",
  },
  {
    id: 3,
    titulo: "Portfolio Web – React",
    descripcion:
      "Portfolio profesional desarrollado con React. Implementa componentes reutilizables, manejo de estado y preparado para consumir datos de una API backend.",
    tecnologias: "React · JavaScript · CSS · API REST",
    github: "https://github.com/marialis19/react-portfolio",
    demo: "",
  },
]);

      setLoading(false);  // cuando llegan los datos
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />

      <Header
        name="Marialis Ayelén Aquino"
        role="Junior Full Stack Developer"
        stack="React · Angular · Flask · Django · REST APIs"
      />

      <About />
      <Skills />

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : (
        <Projects projects={projects} />
      )}
    </div>
  );
}

export default App;
