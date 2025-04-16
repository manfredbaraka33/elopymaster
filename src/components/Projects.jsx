import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    name: 'SokoApp',
    link: 'https://younest-frontend.vercel.app/',
    img: '/images/sokoapp.png',
    desc: 'A modern digital marketplace built with React and Django.'
  },
  {
    name: 'ZenSortAI',
    link: 'https://zensortai.vercel.app/',
    img: '/images/zensortai.png',
    desc: 'An AI-Powered Resume Similarity Checker'
  },
  {
    name: 'ElopySage',
    link: 'https://elopysage.vercel.app/',
    img: '/images/elopysage.png',
    desc: 'An AI-powered assistant that predicts medical and power consumption cost'
  },
  {
    name: 'Elopify',
    link: 'https://elopify.vercel.app/',
    img: '/images/elopify.png',
    desc: 'A text analysis toolkit for detecting sentiment and hate speech.'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5 text-light" id="projects">
      <h3 className="text-center mb-4" data-aos="fade-up">
        What I’ve Been Working On
      </h3>
      <div className="row g-4 justify-content-center">
        {projects.map((project, idx) => (
          <div
            className="col-md-5 col-lg-4"
            key={idx}
            data-aos="flip-up"
            data-aos-delay={idx * 100} // optional delay for different animations
          >
            <div className="card bg-dark h-100 shadow border-light pj">
              <img
                src={project.img}
                className="card-img-top"
                alt={project.name}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text text-warning">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
