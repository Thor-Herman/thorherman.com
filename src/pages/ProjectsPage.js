import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Khabu from '../assets/khabu.png';
import GalaxyShooter from '../assets/galaxy-shooter.png';
import ThorHerman from '../assets/thorherman.com.png';

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <p className="section-title">Personal Projects</p>
      <ProjectCard
        title="Khabu"
        description="Real-time multiplayer card game made in React and Spring-Boot."
        image={Khabu}
      />
      <ProjectCard
        title="Galaxy Shooter"
        description="2D Unity project based on a Udemy course"
        image={GalaxyShooter}
      />
      <ProjectCard
        title="thorherman.com"
        description="You're on it right now!"
        image={ThorHerman}
      />
    </section>
  );
};

export default ProjectsPage;
