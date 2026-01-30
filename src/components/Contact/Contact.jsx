import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>

      <p>
        ¿Querés contactarme o conocer más sobre mi trabajo?
      </p>

      <div className="contact-links">
        <a href="mailto:marialis1903@gmail.com">
          marialis1903@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/marialis-aquino"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/marialis19"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
