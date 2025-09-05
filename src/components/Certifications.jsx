import React from 'react';

const certs = [
  { name: 'McKinsey Forward Program', issued: 'Jul 2025' },
  { name: 'Fundamentals of Deep Learning, NVIDIA', issued: 'Jan 2025' },
  { name: 'Introduction to Machine Learning, Duke University', issued: '' },
  { name: 'The Structured Query Language (SQL), University of Colorado Boulder', issued: 'Sep 2024' },
  { name: 'Design Thinking: Prototyping', issued: '' },
  { name: 'Brainstorming Tools', issued: '' },
  { name: 'Miro for UX: Brainstorming and Collaboration', issued: '' },
  { name: 'Service Innovation', issued: '' },
  { name: 'Rapid Prototyping for Product Design', issued: '' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        <div className="grid" style={{gap:8, marginBottom:12}}>
          <span className="eyebrow">Certifications</span>
          <div className="section-title">Credentials & courses</div>
        </div>
        <div className="card pad" style={{padding:0}}>
          <ul style={{listStyle:'none', margin:0, padding:0}}>
            {certs.map((item) => (
              <li key={item.name} style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'14px 20px', borderBottom:'1px solid var(--border)'}}>
                <span style={{fontWeight:500}}>{item.name}</span>
                {item.issued && <span style={{color:'var(--muted)', fontSize:13}}>Issued {item.issued}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;


