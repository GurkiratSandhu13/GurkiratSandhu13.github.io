import React from 'react';

const projects = [
  {
    name: 'Unified Mobility Interface (UMI)',
    description:
      'Developed and deployed UMI, a multi-modal navigation API, enabling optimised route recommendations across various transportation modes using deep learning and LLMs. Implemented a web-based interface with interactive map visualisations and route planning.',
    link: '#',
  },
  {
    name: 'AirVision',
    description:
      'Pioneered an AQI prediction system for Chandigarh using a Random Forest Regressor in Python, fine-tuned to achieve 98.4% prediction accuracy.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <div className="grid" style={{gap:8, marginBottom:12}}>
          <span className="eyebrow">Projects</span>
          <div className="section-title">Selected work</div>
        </div>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fill, minmax(340px, 1fr))'}}>
          {projects.map((item) => (
            <div key={item.name} className="card pad" style={{display:'grid', gap:8, height:'100%'}}>
              <div style={{display:'grid', gap:6, alignContent:'space-between', height:'100%'}}>
                <div style={{fontWeight:600}}>{item.name}</div>
                <p className="subtitle" style={{margin:0}}>{item.description}</p>
                <div style={{marginTop:'auto'}}>
                  {item.link && (
                    <a className="btn" href={item.link} target="_blank" rel="noreferrer">View</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


