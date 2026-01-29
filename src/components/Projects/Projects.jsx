function Projects({ projects }) {
  return (
    <section>
      <h2>Proyectos</h2>

      {projects.map((projects) => (
        <div key={projects.id}>
            <h3>{projects.titulo}</h3>
            <p>{projects.descripcion}</p>
            <small>{projects.tecnologias}</small>
        </div>
      ))}
    </section>
  );
}

export default Projects;
