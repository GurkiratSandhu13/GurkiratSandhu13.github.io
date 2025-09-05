import React from 'react';

const schools = [
  { name: 'Chandigarh University', detail: "Bachelor's of Engineering, Computer Science: Artificial Intelligence (2023 - 2027)", gpa: 'GPA: 8.12', link: 'https://www.cuchd.in' },
  { name: 'BDS Public School', detail: 'Intermediate (CBSE) (2021 - 2023)', gpa: 'GPA: 80.4%' },
  { name: 'Spring Dale Senior School', detail: 'Matriculation (CBSE) (2020 - 2021)', gpa: 'GPA: 92.3%', link: 'https://springdaleeducation.com' },
];

const Education = () => {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <div className="grid" style={{gap:8, marginBottom:12}}>
          <span className="eyebrow">Education</span>
          <div className="section-title">Academic background</div>
        </div>
        <div className="grid" style={{gap:12}}>
          {schools.map((s) => (
            <div key={s.name} className="card pad" style={{display:'grid', gap:6}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                <div style={{fontWeight:600}}>
                  {s.link ? (
                    <a href={s.link} target="_blank" rel="noreferrer" style={{display:'inline-flex', alignItems:'center', gap:8}}>
                      {s.name}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    s.name
                  )}
                </div>
                <div style={{color:'var(--muted)', fontSize:13}}>{s.gpa}</div>
              </div>
              <div className="subtitle" style={{margin:0}}>{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;


