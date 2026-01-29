import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About"; 
import Projects from "./components/Projects/Projects.jsx";

function App() {
  const proyectosData = [
  {
    id: 1,
    titulo: "Portfolio React",
    descripcion: "Portfolio personal desarrollado con React",
    tecnologias: "React, CSS"
  },
  {
    id: 2,
    titulo: "API con Flask",
    descripcion: "API REST desarrollada con Flask.",
    tecnologias: "Python, Flask"
  }
];
  return (
    <div> 
      <Navbar />
      <Header 
        name="Marialis Ayelen Aquino"
        role="Junior Full Stack Developer"
        stack="React · Python · APIs · Frontend"
      />

      <About />
      <Projects projects={proyectosData} />
    </div>
  );
}

export default App;
