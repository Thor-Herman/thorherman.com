import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Khabu from '../assets/khabu.png';
import GalaxyShooter from '../assets/galaxy-shooter.png';
import ThorHerman from '../assets/thorherman.com.png';

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects-section">
      <p className="section-title">Personal Projects</p>
      <ProjectCard
        title="Khabu"
        description="Real-time multiplayer card game made in React and Spring-Boot."
        image={Khabu}
        playableLink={'khabu.eu-north-1.elasticbeanstalk.com/'}
      />
      <ProjectCard
        title="Galaxy Shooter"
        description="2D Unity project based on a Udemy course"
        image={GalaxyShooter}
        playableLink={'http://www.thorherman.com/play.html'}
      />
      <ProjectCard
        title="This Page"
        description="You're on it right now!"
        image={ThorHerman}
      />
    </section>
  );
};

export default ProjectsSection;
