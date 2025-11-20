
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";



export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Hello, I'm Trystan</h1>
        <p>Software Engineering · Full-Stack Developer · Problem Solver</p>
      </header>
      <About />
      <section className="section">
        <Skills />
      </section>
      <Contact />
    </div>
  );
}


