import "./Contact.css";

function Contact({ data }) {
  if (!data) return null;

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">{data.title}</h2>

      <div className="contact-links">
        <a
          href={data.linkedin.url}
          target="_blank"
          rel="noreferrer"
        >
          <i className="devicon-linkedin-plain"></i>
          <span>{data.linkedin.label}</span>
        </a>

        <a href={`mailto:${data.email.address}`}>
          <span className="mail-icon">@</span>
          <span>{data.email.address}</span>
        </a>

        <a
          href={data.github.url}
          target="_blank"
          rel="noreferrer"
        >
          <i className="devicon-github-original"></i>
          <span>{data.github.label}</span>
        </a>
      </div>

      <p className="contact-footer">
        © {new Date().getFullYear()} Marialis Aquino · {data.footer}
      </p>
    </section>
  );
}

export default Contact;
