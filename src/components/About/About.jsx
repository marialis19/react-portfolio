import { useState } from "react";
import "./About.css";

function About () {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="about">
            <h2>About Me</h2>

            <p>
              Soy desarrolladora Full Stack enfocada en crear aplicaciones web limpias,
              funcionales y bien estructuradas.
            </p>

            {showMore && (
              <p>
               Disfruto trabajar con React en el frontend y Python en el backend,
               desarrollando APIs y conectándolas con interfaces modernas y
               responsivas.
              </p>
            )}

            <button onClick={() => setShowMore(!setShowMore)}>
                {showMore ? "Mostrar menos" : "Mostrar más"}
            </button>
        </section>
    )
}

export default About;