import React from 'react';
import './ProjectCard.css';
import _ from 'lodash';
import Button from './Button';

const ProjectCard = ({ id, title, description, image, isPlayable }) => {
  return (
    <div className="project-card">
      <div className="info">
        <div className="text">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="button-container">
          <Button color="grey" text="Read More" />
          {isPlayable && <Button color="green" text="Play Now" />}
        </div>
      </div>
      <div className={'project-image ' + _.kebabCase(title) + '-image'}>
        <img src={image} alt={'Image of ' + title} />
      </div>
    </div>
  );
};

export default ProjectCard;
