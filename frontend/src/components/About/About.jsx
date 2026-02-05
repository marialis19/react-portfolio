import { useState } from "react";
import "./About.css";

function About({ data }) {
  const [showMore, setShowMore] = useState(false);

  // mientras llega la data
  if (!data) {
    return (
      <section className="about" id="about">
        <p>Cargando información...</p>
      </section>
    );
  }

  return (
    <section className="about" id="about">
      <h2 className="section-title">{data.title}</h2>

      <p>{data.intro}</p>

      {showMore && (
        <p>
          {data.details.split("\n\n").map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Mostrar menos" : "Mostrar más"}
      </button>
    </section>
  );
}

export default About;
