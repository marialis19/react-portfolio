import "./CVButton.css";

function CVButton() {
  return (
    <div className="cv-container">
      <a
        href="/Marialis_Aquino_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
      >
        Descargar CV
      </a>
    </div>
  );
}

export default CVButton;
