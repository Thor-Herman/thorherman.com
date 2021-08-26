import React from 'react';
import './ProjectCard.css';
import _ from 'lodash';
import Button from './Button';
import { Link } from 'react-router-dom';
import PlayButton from './PlayButton';

const ProjectCard = ({
  url,
  title,
  description,
  image,
  playableLink,
  external = false,
}) => {
  return (
    <div className="project-card split">
      <div className="info">
        <div className="text">
          <h3 className="title bold">{title}</h3>
          <p className="description italic">{description}</p>
        </div>
        <div className="button-container">
          <Link to={'modal/' + url}>
            <Button color="grey" text="Read More" type="outlined" />
          </Link>
          <PlayButton external={external} playableLink={playableLink} />
        </div>
      </div>
      <div className={'project-image ' + _.kebabCase(title) + '-image'}>
        <img src={image} alt={'Image of ' + title} />
      </div>
    </div>
  );
};

export default ProjectCard;
