import Contact from "../components/Contact";
import About from "../components/About";


export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Hello, I'm Trystan</h1>
        <p>Software Engineering · Full-Stack Developer · Problem Solver</p>
      </header>
      
      <section className="section">
        <h2>Featured Skills</h2>
        <div className="card-grid">
          <div className="card">add card</div>
          <div className="card">add card</div>
          <div className="card">add card</div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
