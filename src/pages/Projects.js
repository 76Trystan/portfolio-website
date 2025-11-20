import { useState } from "react";
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "ANPR Check-In System",
      description: "Automatic number plate recognition system using EasyOCR + React dashboard.",
    },
    {
      title: "Bridge Control Program",
      description: "Smart bridge control system.",
    },
    {
      title: "Third Project",
      description: "Description for third project.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`card ${openIndex === index ? "card-open" : ""}`}
            onClick={() => toggleCard(index)}
          >
            <h3>{project.title}</h3>
            <div className="card-details">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
