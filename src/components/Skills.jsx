import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const skills = {
  "Web Development": [
    { name: "HTML", icon: "bi-filetype-html", color: "secondary" },
    { name: "CSS", icon: "bi-filetype-css", color: "danger" },
    { name: "JavaScript", icon: "bi-filetype-js", color: "warning text-dark" },
    { name: "React", icon: "bi-lightning-charge-fill", color: "info text-dark" },
    { name: "Django", icon: "bi-code-slash", color: "success" },
    { name: "FastApi", icon: "bi-lightning", color: "dark" },
    { name: "DRF", icon: "bi-plug", color: "primary" },
    { name: "Bootstrap", icon: "bi-bootstrap", color: "secondary" }
  ],
  "Data Science & ML": [
    { name: "Python", icon: "bi-filetype-py", color: "primary" },
    { name: "Pandas", icon: "bi-graph-up", color: "info text-dark" },
    { name: "NumPy", icon: "bi-kanban", color: "secondary" },
    { name: "Scikit-learn", icon: "bi-diagram-3", color: "success" },
    { name: "TensorFlow", icon: "bi-cpu", color: "warning text-dark" },
    { name: "FastText", icon: "bi-chat-dots", color: "dark" },
    { name: "SpaCy", icon: "bi-brain", color: "primary" },
    { name: "Jupyter", icon: "bi-journal-code", color: "danger" }
  ],
  "DevOps & Deployment": [
    { name: "Git", icon: "bi-git", color: "danger" },
    { name: "GitHub", icon: "bi-github", color: "dark" },
    { name: "Docker", icon: "bi-box", color: "primary" },
    { name: "AWS", icon: "bi-cloud", color: "warning text-dark" },
    { name: "Vercel", icon: "bi-upload", color: "info text-dark" },
    { name: "Netlify", icon: "bi-globe", color: "success" }
  ]
};

export default function Skills() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div  className="text-light row p-3">
     <center> <h3 className="mb-4 text-warning">🛠️ Skills & Technologies</h3>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} data-aos="flip-up"  className="col mx-1 my-4 about-me mt-3 skill-badge rounded p-3">
          <center>
          <h5>{category}</h5>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {items.map(skill => (
              <span key={skill.name} data-aos="fade-up" className={`badge p-2 bg-${skill.color}`}>
                <i className={`bi ${skill.icon} me-1`}></i> {skill.name}
              </span>
            ))}
          </div>
          </center>
        </div>
      ))}
      </center>
    </div>
  );
}
