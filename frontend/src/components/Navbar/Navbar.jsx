import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <h2 className="logo">Full Stack Developer</h2>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
