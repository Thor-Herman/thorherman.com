import React, { useEffect, useState } from 'react';
import Button from './Button';
import './ProjectModal.css';
import Khabu from '../assets/khabu.png';
import IconButton from './IconButton';
import { useHistory, useParams } from 'react-router-dom';
import client from '../api/sanityClient';
import CircularProjectImage from './CircularProjectImage';

const ProjectModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const query =
      '*[_type == \'project\' && slug.current == $id] {name, \'imageUrl\': image.asset->url, description, technologies, githubURL, playURL, playable}';
    const params = { id };
    client.fetch(query, params).then((result) => {
      setData(result[0]);
    });
    setIsLoading(false);
  }, [id]);

  if (!id || isLoading || ! data ) return null;

  const { name, imageUrl, description, technologies, githubURL, playURL, playable } = data;

  const descriptionJSX = description.map((block) => (
    <p>
      {block.children[0].text} <br />
      <br />
    </p>
  ));

  return (
    <div className="project-modal-bg">
      <div className="modal">
        <div className="">
          <div className="image-container">
            <CircularProjectImage image={imageUrl} />
          </div>
          <div className="technologies">
            <h4 className="underline">Technologies</h4>
            <ul>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="modal-second-column">
          <h1 className="bold">{name}</h1>
          <p className="modal-description">{descriptionJSX}</p>
          <div className="modal-buttons flex">
            <Button text="Github Repo" link={githubURL} color="none" type="underline" />
            {playable && (
              <Button
                text="Play Now"
                link={playURL}
                color="green"
              />
            )}
          </div>
        </div>
        <IconButton type="close" size="large" onClick={() => history.push('/')} />
      </div>
    </div>
  );
};

export default ProjectModal;
