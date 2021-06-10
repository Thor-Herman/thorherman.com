import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Khabu from '../assets/khabu.png';

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <p className="section-title">Personal Projects</p>
      <ProjectCard
        title="Khabu"
        description="Real-time multiplayer card game made in React and Spring-Boot."
        image={Khabu}
      />
    </section>
  );
};

export default ProjectsPage;
