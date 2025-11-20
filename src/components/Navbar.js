/*
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
*/

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Navigate home */}
      <Link to="/">Home</Link>

      {/* Navigate home AND scrolls */}
      <Link to="/?scroll=about">About</Link>
      <Link to="/?scroll=contact">Contact</Link>

      {/* Separate projects page */}
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Navbar;
