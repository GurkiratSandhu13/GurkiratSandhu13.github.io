import React from 'react';

const Section = ({ title, items }) => (
  <div className="card pad" style={{display:'grid', gap:8}}>
    <div style={{fontWeight:600}}>{title}</div>
    <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
      {items.map((s) => (
        <span key={s} className="btn" style={{padding:'8px 12px'}}>{s}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const groups = [
    { title: 'Core Competencies', items: ['Leadership','Engineering','Business Resilience','Machine Learning','Deep Learning','Statistical Data Analysis','Predictive Analytics','Data Science'] },
    { title: 'Programming & Tech', items: ['C++','Java','Python','Android Development','SQL','Swift','XML','Data Structures','DBMS','IBM SPSS','Android Studio','Orange (Software)','AutoCAD','JDBC'] },
    { title: 'Professional Skills', items: ['Project Management','Leadership Development','Front-End Development','GUI','Design Analysis','Brainstorming Tools','Adaptive Leadership','Student Council','Secretary','Creativity and Innovation'] },
    { title: 'Creative & Critical Thinking', items: ['Thinking Creatively','Creative Exercises','Critical Thinking','Critical Thinking Mindset','Creative Ideation','Generate Creative Ideas'] },
    { title: 'Design & UX', items: ['Design Thinking','User Experience Design','Miro for UX','Agile','Agile Project Management','Agile Leadership','Remote Team Management'] },
    { title: 'Soft Skills', items: ['Problem Solving','Communication','Emotional Intelligence','Empathy at Work','Team Leadership','Conflict Resolution'] },
    { title: 'Interests', items: ['macOS','iOS','Debate','Quiz','Gymnastics','MMA','Weightlifting'] },
  ];

  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <div className="grid" style={{gap:8, marginBottom:12}}>
          <span className="eyebrow">Skills</span>
          <div className="section-title">Capabilities</div>
        </div>
        <div className="grid" style={{gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))'}}>
          {groups.map((g) => (
            <Section key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


