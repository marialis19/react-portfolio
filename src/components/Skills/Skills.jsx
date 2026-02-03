import "./Skills.css";

function Skills() {
  const skillsData = [
    {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
      { name: "React", icon: "devicon-react-original" },
      { name: "Angular", icon: "devicon-angularjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "API REST", icon: "devicon-fastapi-plain" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Draw.io", icon: "devicon-markdown-original"},
    ],
  },
  {
    category: "Metodologías",
    items: [
      { name: "Scrum", icon: "devicon-jira-plain" },
      { name: "Trello", icon: "devicon-trello-plain" },
      { name: "Mural", icon: "devicon-confluence-plain" },
    ],
  },
];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Habilidades</h2>

      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div className="card skill-card" key={index}>
            <h3>{skillGroup.category}</h3>

            <ul>
              {skillGroup.items.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
