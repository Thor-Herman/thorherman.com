import React from 'react';
import './ProjectCard.css';
import _ from 'lodash';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="project-card">
      <div className="info">
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <button className="button">Read More</button>
      </div>
      <img src={image} alt={'Image of ' + title} className={_.kebabCase(title) + "-image"}/>
    </div>
  );
};

export default ProjectCard;
