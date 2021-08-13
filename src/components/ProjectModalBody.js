import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import CircularProjectImage from './CircularProjectImage';
import IconButton from './IconButton';

const ProjectModalBody = ({
  imageUrl,
  technologiesJSX,
  name,
  descriptionJSX,
  githubURL,
  playable,
  playURL,
}) => {
  const history = useHistory();
  return (
    <div className="modal">
      <div className="modal-first-column">
        <div className="image-container">
          <CircularProjectImage image={imageUrl} />
        </div>
        <div className="technologies">
          <h4 className="underline">Technologies</h4>
          <ul>
            {technologiesJSX}
          </ul>
        </div>
      </div>
      <div className="modal-second-column">
        <h1 className="bold">{name}</h1>
        <p className="modal-description">{descriptionJSX}</p>
        <div className="modal-buttons flex">
          <Button
            text="Github Repo"
            link={githubURL}
            color="none"
            type="underline"
          />
          {playable && <Button text="Play Now" link={playURL} color="green" />}
        </div>
      </div>
      <IconButton type="close" size="large" onClick={() => history.push('/')} />
    </div>
  );
};

export default ProjectModalBody;
