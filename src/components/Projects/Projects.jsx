function Projects({ projects }) {
  return (
    <section>
      <h2>Proyectos</h2>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.titulo}</h3>
          <p>{project.descripcion}</p>
          <small>{project.tecnologias}</small>
        </div>
      ))}
    </section>
  );
}

export default Projects;