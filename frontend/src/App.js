import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import CVButton from "./components/CVButton/CVButton";
import Contact from "./components/Contact/Contact";

// 👉 Backend en producción (Render)
const API_URL = "https://react-portfolio-backend-i2ff.onrender.com";

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aboutData, setAboutData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al traer proyectos:", error);
        setLoading(false);
      });

    fetch(`${API_URL}/api/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((error) => {
        console.error("Error al cargar skills:", error);
      });

    fetch(`${API_URL}/api/about`)
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => {
        console.error("Error al cargar about:", error);
      });

    fetch(`${API_URL}/api/header`)
      .then((res) => res.json())
      .then((data) => setHeaderData(data))
      .catch((error) => {
        console.error("Error al cargar header:", error);
      });

    fetch(`${API_URL}/api/contact`)
      .then((res) => res.json())
      .then((data) => setContactData(data))
      .catch((error) => {
        console.error("Error al cargar contacto:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />

      {headerData && (
        <Header
          name={headerData.name}
          role={headerData.role}
          stack={headerData.stack}
        />
      )}

      <CVButton />

      <About data={aboutData} />

      <Skills skills={skills} />

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : (
        <Projects projects={projects} />
      )}

      {contactData && <Contact data={contactData} />}
    </div>
  );
}

export default App;
