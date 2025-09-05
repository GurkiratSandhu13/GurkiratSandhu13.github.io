import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Front-End Developer & Machine Learning Engineer</span>
          <h1 className="title-xl">Gurkirat Singh Sandhu</h1>
          <ul className="subtitle" style={{margin:0, paddingLeft:18, display:'grid', gap:6}}>
            <li>A passionate ML Engineer with experience in building machine learning models with Python.</li>
            <li>Front-end developer with a passion for creating aesthetic and functional websites.</li>
            <li>A group leader, motivator, and an innovator with strengths in resilience, strategy, and problem-solving.</li>
          </ul>
          <div className="hero-actions">
            <a className="btn" href="mailto:gurkiratssandhu13@gmail.com"><MdEmail /> Email</a>
            <a className="btn" href="https://www.linkedin.com/in/gurkiratsinghsandhu" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a className="btn" href="https://github.com/GurkiratSandhu13" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <span className="btn" style={{pointerEvents:'none'}}><GoLocation /> Chandigarh, India</span>
            <a className="btn" href={process.env.PUBLIC_URL + "/resume.pdf"} download><FaDownload /> Download CV</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-overlay"></div>
          <img src={process.env.PUBLIC_URL + "/profile.png"} alt="Gurkirat Singh Sandhu" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


