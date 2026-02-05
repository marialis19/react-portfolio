from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ---------- HOME ----------
@app.route("/")
def home():
    return "Flask funcionando correctamente"

# ---------- HEADER ----------
@app.route("/api/header")
def get_header():
    return jsonify({
        "name": "Marialis Ayelén Aquino",
        "role": "Junior Full Stack Developer",
        "stack": "React · Angular · Flask · Django · REST APIs"
    })

# ---------- CONTACT ----------
@app.route("/api/contact")
def get_contact():
    return jsonify({
        "title": "Contacto",
        "linkedin": {
            "url": "https://www.linkedin.com/in/marialis-aquino",
            "label": "LinkedIn"
        },
        "github": {
            "url": "https://github.com/marialis19",
            "label": "GitHub"
        },
        "email": {
            "address": "marialis1903@gmail.com"
        },
        "footer": "Portfolio personal"
    })

# ---------- ABOUT ----------
@app.route("/api/about")
def get_about():
    return jsonify({
        "title": "Sobre Mí",
        "intro": "Soy desarrolladora Full Stack en formación, con foco en el desarrollo de aplicaciones web modernas, claras y bien estructuradas.",
        "details": "Trabajo principalmente en frontend con React y Angular, desarrollando interfaces funcionales y orientadas al usuario, y en backend con Flask y Django, creando APIs REST y lógica de negocio.\n\nMe interesa construir soluciones escalables, mantener buenas prácticas de código y comprender el flujo completo de una aplicación, desde la interfaz hasta la base de datos."
    })

# ---------- PROJECTS ----------
@app.route("/api/projects")
def get_projects():
    return jsonify([
        {
            "id": 1,
            "titulo": "ELPALOMAR",
            "descripcion": "Sistema integral de gestión para un club deportivo. Proyecto Full Stack que evolucionó desde una maqueta estática hasta una arquitectura con frontend en Angular y backend en Django.",
            "tecnologias": "Angular · TypeScript · Django · Python · API REST · MySQL",
            "github": "https://github.com/El-palomar/ElPalomar",
            "demo": ""
        },
        {
            "id": 2,
            "titulo": "Glamping – Cabañas Alpinas",
            "descripcion": "Sitio web para un complejo de cabañas alpinas en las sierras de Córdoba, desarrollado con foco en diseño visual, estructura responsive y experiencia del usuario.",
            "tecnologias": "HTML · CSS · Bootstrap · JavaScript",
            "github": "https://github.com/marialis19/Glamping",
            "demo": ""
        },
        {
            "id": 3,
            "titulo": "Portfolio Web – React",
            "descripcion": "Portfolio personal desarrollado con React para presentar proyectos y habilidades profesionales. Implementa componentes reutilizables, manejo de estado y preparación para consumo de APIs.",
            "tecnologias": "React · JavaScript · CSS · API REST",
            "github": "https://github.com/marialis19/react-portfolio",
            "demo": ""
        }
    ])


# ---------- SKILLS ----------
@app.route("/api/skills")
def get_skills():
    return jsonify([
        {
            "category": "Frontend",
            "items": [
                {"name": "HTML"},
                {"name": "CSS"},
                {"name": "Bootstrap"},
                {"name": "React"},
                {"name": "Angular"},
                {"name": "TypeScript"}
            ]
        },
        {
            "category": "Backend",
            "items": [
                {"name": "Python"},
                {"name": "Flask"},
                {"name": "Django"},
                {"name": "MySQL"},
                {"name": "API REST"}
            ]
        },
        {
            "category": "Herramientas",
            "items": [
                {"name": "Git"},
                {"name": "GitHub"},
                {"name": "VS Code"},
                {"name": "Diagramas / UML"}
            ]
        },
        {
            "category": "Metodologías",
            "items": [
                {"name": "Scrum"},
                {"name": "Trello"},
                {"name": "Confluence"}
            ]
        }
    ])


# ---------- RUN ----------
if __name__ == "__main__":
    print("🔥 Flask está arrancando")
    app.run(debug=True)
