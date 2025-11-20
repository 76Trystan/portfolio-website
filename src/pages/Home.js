
import Contact from "../components/Contact";
import About from "../components/About";


export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Hello, I'm Trystan</h1>
        <p>Software Engineering · Full-Stack Developer · Problem Solver</p>
      </header>
      <About />
      <section className="section">
        <h2>Featured Skills</h2>
        <div className="card-grid">
          <div className="card">Full-Stack Development</div>
          <div className="card">Problem Solving & Debugging</div>
          <div className="card">Software Architecture & System Design</div>
          <div className="card">Cloud Deployment & DevOps</div>
          <div className="card">Artificial Intelligence & Machine Learning</div>
          <div className="card">Leadership & Communication</div>
        </div>
      </section>
      <Contact />
    </div>
  );
}


