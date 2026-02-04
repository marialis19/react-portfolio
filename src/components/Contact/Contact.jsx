import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contacto</h2>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/marialis-aquino"
          target="_blank"
          rel="noreferrer"
        >
          <i className="devicon-linkedin-plain"></i>
          <span>LinkedIn</span>
        </a>

        <a href="mailto:marialis1903@gmail.com">
          <span className="mail-icon">@</span>
          <span>marialis1903@gmail.com</span>
        </a>

        <a
          href="https://github.com/marialis19"
          target="_blank"
          rel="noreferrer"
        >
          <i className="devicon-github-original"></i>
          <span>GitHub</span>
        </a>
      </div>

      <p className="contact-footer">
        © {new Date().getFullYear()} Marialis Aquino · Portfolio personal
      </p>
    </section>
  );
}

export default Contact;
