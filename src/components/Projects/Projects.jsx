import "./Projects.css";

function Projects({ projects }) {
  return (
    <section className="projects">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.titulo}</h3>

            <p>{project.descripcion}</p>

            <small>{project.tecnologias}</small>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
