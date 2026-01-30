import "./Projects.css";

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <h2>Proyectos</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.titulo}</h3>
            <p>{project.descripcion}</p>
            <small>{project.tecnologias}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
