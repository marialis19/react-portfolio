function Projects({ projects }) {
  return (
    <section>
      <h2>Proyectos</h2>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.titulo}</h3>

          <p>{project.descripcion}</p>

          <small>{project.tecnologias}</small>

          <div>
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
    </section>
  );
}

export default Projects;
