import React from 'react';

const experienceItems = [
  {
    title: 'Enthyuzm',
    role: 'Joint CEO and Co-Founder',
    period: 'Dec 2023 — Present',
    link: 'https://enthyuzm.com',
    description:
    "As the Joint CEO and Co-Founder of Enthyuzm, I spearheaded the development of a tech startup that innovates solutions for everyday problems using disruptive technology. I cultivated a thriving ecosystem, incubating and accelerating the growth of nascent startups while architecting scalable business models.",
  },
  {
    title: 'Chandigarh University',
    role: 'Joint Secretary, TechTatva Club',
    period: 'Jul 2025 — Present',
    description:
    "Spearheaded and executed multiple large-scale tech events, such as hackathons and workshops, for TechTatva Club (Chandigarh University's top club), attracting 500+ participants. Directed a 12-member core team in event planning and execution.",
    link: 'https://techtatva.club',
  },
  {
    title: 'Chandigarh University',
    role: 'Class Representative',
    period: 'Jan 2023 — Present',
    description:
    'Guided peers and represented student interests. Facilitated communication between students, faculty, and administration.',
    link: 'https://www.cuchd.in',
  },
  {
    title: 'Dream Luminous',
    role: 'Sales Representative',
    period: 'Jan 2019 — Jan 2023',
    description:
      'Being a sales representative in a first-generation business in a relatively new market instilled in me skills such as resilience and staying motivated despite any odds. Additionally, it improved my marketing and people skills.',
    link: 'https://dreamluminous.com',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="container">
        <div className="grid" style={{gap:8, marginBottom:12}}>
          <span className="eyebrow">Experience</span>
          <div className="section-title">Roles & leadership</div>
        </div>
        <div className="experience-grid">
          {experienceItems.map((item) => (
            <div key={item.title + item.role} className="card pad experience-card">
              <div className="company">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="company-link">{item.title} <span aria-hidden>↗</span></a>
                ) : (
                  item.title
                )}
              </div>
              <div className="role">{item.role}</div>
              <div className="period">{item.period}</div>
              {item.description && (
                <p className="subtitle" style={{margin:0}}>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


