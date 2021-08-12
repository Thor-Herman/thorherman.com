import React from 'react';
import './ProjectCard.css';
import _ from 'lodash';
import Button from './Button';
import { Link } from 'react-router-dom';

const ProjectCard = ({ url, title, description, image, playableLink }) => {
  return (
    <div className="project-card split">
      <div className="info">
        <div className="text">
          <h3 className="title bold">{title}</h3>
          <p className="description italic">{description}</p>
        </div>
        <div className="button-container">
          <Link to={'modal/' + url}>
            <Button color="grey" text="Read More" />
          </Link>
          {playableLink && (
            <Button color="green" text="Play Now" link={playableLink} />
          )}
        </div>
      </div>
      <div className={'project-image ' + _.kebabCase(title) + '-image'}>
        <img src={image} alt={'Image of ' + title} />
      </div>
    </div>
  );
};

export default ProjectCard;
