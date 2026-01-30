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
    titulo: "ELPALOMAR",
    descripcion:
      "Sistema integral de gestión para un club deportivo. Proyecto Full Stack que evolucionó desde una maqueta estática hasta una arquitectura con frontend en Angular y backend en Django.",
    tecnologias: "Angular · Ts · Django · Python · API REST · MySQL",
    github: "https://github.com/El-palomar/ElPalomar",
    demo: "",
  },
  {
    id: 2,
    titulo: "Glamping – Cabañas Alpinas",
    descripcion:
      "Sitio web para un complejo de cabañas alpinas en las sierras de Córdoba, desarrollado con foco en diseño visual, estructura responsive y experiencia del usuario.",
    tecnologias: "HTML · CSS · Bootstrap · JavaScript",
    github: "https://github.com/marialis19/Glamping",
    demo: "",
  },
  {
    id: 3,
    titulo: "Portfolio Web – React",
    descripcion:
      "Portfolio personal desarrollado con React para presentar proyectos y habilidades profesionales. Implementa componentes reutilizables, manejo de estado y preparación para consumo de APIs.",
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
