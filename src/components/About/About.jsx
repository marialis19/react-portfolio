import { useState } from "react";
import "./About.css";

function About () {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="about" id="about">
            <h2>About Me</h2>

            <p>
              Soy desarrolladora Full Stack en formación, enfocada en crear aplicaciones web limpias,
              funcionales y bien estructuradas.
            </p>

            {showMore && (
              <p>
               Trabajo principalmente en el frontend con React, Angular
               creando interfaces claras y funcionales, y en backend con 
               Flask, Django desarrollando APIs REST. Me interesa construir 
               aplicaciones bien estructuradas, escalables y orientadas al usuario.
              </p>
            )}

            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Mostrar menos" : "Mostrar más"}
            </button>
        </section>
    )
}

export default About;