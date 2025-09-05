import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="section" role="contentinfo" aria-label="Footer">
      <div className="container" style={{display:'grid', placeItems:'center', gap:12}}>
        <div style={{color:'var(--muted)'}}>© {year} Gurkirat Singh Sandhu</div>
        <div style={{display:'flex', gap:16}}>
          <a href="mailto:gurkiratssandhu13@gmail.com" style={{display:'inline-flex', alignItems:'center', gap:8}}><MdEmail /> Email</a>
          <a href="https://www.linkedin.com/in/gurkiratsinghsandhu" target="_blank" rel="noreferrer" style={{display:'inline-flex', alignItems:'center', gap:8}}><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/GurkiratSandhu13" target="_blank" rel="noreferrer" style={{display:'inline-flex', alignItems:'center', gap:8}}><FaGithub /> GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


