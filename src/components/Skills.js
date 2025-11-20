import { useState } from "react";
import './Skills.css';

export default function Skills() {
  const skills = [
    {
      title: "Full-Stack Development",
      details: "Building responsive web apps using React, Node.js, Express, and REST APIs."
    },
    {
      title: "Problem Solving & Debugging",
      details: "Breaking down complex problems, debugging efficiently, and writing clean code."
    },
    {
      title: "Software Architecture & System Design",
      details: "Designing scalable, maintainable, and modular systems."
    },
    {
      title: "Cloud Deployment & DevOps",
      details: "Deploying apps using AWS, Docker, and CI/CD pipelines."
    },
    {
      title: "AI & Machine Learning",
      details: "Working with ML libraries like TensorFlow, PyTorch."
    },
    {
      title: "Leadership & Communication",
      details: "Leading teams, collaborating effectively, and communicating technical concepts clearly."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <h2 className="section-title">Featured Skills</h2>
      <div className="card-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`card ${openIndex === index ? "card-open" : ""}`}
            onClick={() => toggleCard(index)}
          >
            <h3>{skill.title}</h3>
            <div className="card-details">
              {skill.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
