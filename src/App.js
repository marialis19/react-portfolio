import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulamos una llamada a API
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          titulo: "Portfolio React",
          descripcion: "Portfolio personal desarrollado con React",
          tecnologias: "React, CSS",
        },
        {
          id: 2,
          titulo: "API con Flask",
          descripcion: "API REST desarrollada con Flask.",
          tecnologias: "Python, Flask",
        },
      ]);

      setLoading(false);  // cuando llegan los datos
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />

      <Header
        name="Marialis Ayelen Aquino"
        role="Junior Full Stack Developer"
        stack="React · Python · APIs · Frontend"
      />

      <About />

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : (
        <Projects projects={projects} />
      )}
    </div>
  );
}

export default App;
