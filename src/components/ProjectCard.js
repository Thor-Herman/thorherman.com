import React from 'react';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="project-card">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <button className="button">Read More</button>
      <img src={image} alt={'Image of ' + title} />
    </div>
  );
};

export default ProjectCard;