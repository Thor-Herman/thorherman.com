import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button';
import CircularProjectImage from './CircularProjectImage';
import IconButton from './IconButton';
import PlayButton from './PlayButton';

const ProjectModalBody = ({
  imageUrl,
  technologiesJSX,
  name,
  descriptionJSX,
  githubURL,
  externalLink,
  playURL,
}) => {
  const history = useHistory();
  return (
    <div className="modal flex-vertical">
      <div className="modal-grid">
        <div className="modal-first-column">
          <div className="image-container">
            <CircularProjectImage image={imageUrl} />
          </div>
          <div className="technologies">
            <h4 className="underline">Technologies</h4>
            <ul>{technologiesJSX}</ul>
          </div>
        </div>
        <div className="modal-second-column">
          <div className="modal-title flex-vertical">
            <IconButton
              type="close"
              size="large"
              onClick={() => history.push('/')}
            />
            <h1 className="bold">{name}</h1>
          </div>
          <p className="modal-description">{descriptionJSX}</p>
        </div>
      </div>
      <div className="modal-buttons flex">
        <Button text="Github Repo" link={githubURL} color="none" type="underline" />
        <PlayButton playableLink={playURL} external={externalLink} />
      </div>
    </div>
  );
};

export default ProjectModalBody;
