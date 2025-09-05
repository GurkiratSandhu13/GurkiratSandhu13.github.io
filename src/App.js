import './App.css';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="eyebrow">Gurkirat Singh Sandhu</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </div>
        </div>
      </nav>

      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
