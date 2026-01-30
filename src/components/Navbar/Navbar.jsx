import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Marialis Aquino</h2>

      <ul className="nav-links">
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
