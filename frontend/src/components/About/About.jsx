import { useState } from "react";
import "./About.css";

function About () {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="about" id="about">
            <h2 className="section-title">Sobre Mí</h2>

            <p>
              Soy desarrolladora Full Stack en formación, con foco en el desarrollo de
    aplicaciones web modernas, claras y bien estructuradas.
            </p>

            {showMore && (
              <p>
                Trabajo principalmente en frontend con React y Angular, desarrollando
                interfaces funcionales y orientadas al usuario, y en backend con Flask y
                Django, creando APIs REST y lógica de negocio.
              <br /><br />
                Me interesa construir soluciones escalables, mantener buenas prácticas
                de código y comprender el flujo completo de una aplicación, desde la
                interfaz hasta la base de datos.
              </p>
            )}

            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Mostrar menos" : "Mostrar más"}
            </button>
        </section>
    )
}

export default About;