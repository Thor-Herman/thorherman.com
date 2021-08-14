import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Khabu from '../assets/khabu.png';
import GalaxyShooter from '../assets/galaxy-shooter.png';
import ThorHerman from '../assets/thorherman.com.png';

import './ProjectsSection.css';
import ProjectModal from '../components/ProjectModal';

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects-section" >
      <p className="section-title">Personal Projects</p>
      <div className="projects">
        <ProjectCard
          title="Khabu"
          url="khabu"
          description="Real-time multiplayer card game made in React and Spring-Boot."
          image={Khabu}
        />
        <ProjectCard
          title="Galaxy Shooter"
          url="galaxy-shooter"
          description="2D Unity project based on a Udemy course"
          image={GalaxyShooter}
          playableLink={'http://www.thorherman.com/play'}
        />
        <ProjectCard
          title="This Page"
          url="website"
          description="You're on it right now!"
          image={ThorHerman}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
