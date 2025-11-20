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
      title: "Add Third Project",
      description: "Add third project description.",
    },
  ];

  return (
    <div className="page">
      <h1 className="section-title">Projects</h1>

      <div className="card-grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
