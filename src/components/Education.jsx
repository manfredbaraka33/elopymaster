import React from 'react';

const education = [
  {
    degree: "Bachelor of Science in Health Information Science",
    institution: "University of Dodoma (UDOM)",
    year: "2022-2025",
    description: "Focusing on health data management, digital health solutions, and informatics.",
  },
];

export default function Education() {
  return (
    <section className="text-light p-3">
     <center>
     <h3 className="mb-4 text-warning">🎓 Education</h3>
      {education.map((item, index) => (
        <div key={index} className="mb-3">
          <h5>{item.degree}</h5>
          <p>{item.institution} — {item.year}</p>
          <p>{item.description}</p>
        </div>
      ))}
     </center>
    </section>
  );
}
