import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Khabu from '../assets/khabu.png';
import GalaxyShooter from '../assets/galaxy-shooter.png';
import ThorHerman from '../assets/thorherman.com.png';
import Slackbar from '../assets/Slackbar.png';

import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects-section">
      <p className="section-title">Personal Projects</p>
      <div className="projects">
        <ProjectCard
          title="Khabu"
          url="khabu"
          description="Real-time multiplayer card game made in React and Spring-Boot."
          image={Khabu}
          playableLink={'https://khabu.azurewebsites.net'}
          external={true}
        />
        <ProjectCard
          title="Galaxy Shooter"
          url="galaxy-shooter"
          description="2D Unity project based on a Udemy course"
          image={GalaxyShooter}
          playableLink={'/play/4395585'}
        />
        <ProjectCard
          title="This Page"
          url="website"
          description="You're on it right now!"
          image={ThorHerman}
        />
        <ProjectCard
          title="Elzar Escape"
          url="elzar-escape"
          description="3D On-rails-shooter"
          image={Slackbar}
          playableLink={'/play/4395427'}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
