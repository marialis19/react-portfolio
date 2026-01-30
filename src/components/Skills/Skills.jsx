import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "Bootstrap", "Angular", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Python", "Django", "MySQL", "API REST"],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "VS Code", "Draw.io"],
    },
    {
      category: "Metodologías",
      items: ["Scrum", "Trello", "Mural"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>

      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-card" key={index}>
            <h3>{skillGroup.category}</h3>

            <ul>
              {skillGroup.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
