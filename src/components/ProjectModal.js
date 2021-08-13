import React, { useEffect, useState } from 'react';
import Button from './Button';
import './ProjectModal.css';
import Khabu from '../assets/khabu.png';
import IconButton from './IconButton';
import { useHistory, useParams } from 'react-router-dom';
import client from '../api/sanityClient';
import CircularProjectImage from './CircularProjectImage';

const ProjectModal = ({ active }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [descriptionBlocks, setDescriptionBlocks] = useState([]);
  const [URL, setURL] = useState(['']);
  const [technologies, setTechnologies] = useState([]);
  const [image, setImage] = useState('');

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const query =
      "*[_type == 'project' && slug.current == $id] {name, \"imageUrl\": image.asset->url, description, technologies, URL}";
    const params = { id };
    client.fetch(query, params).then((result) => {
      setTitle(result[0].name);
      setDescriptionBlocks(result[0].description);
      setTechnologies(result[0].technologies);
      setURL(result[0].URL);
      setImage(result[0].imageUrl)
    });
    setIsLoading(false);
  }, [id]);

  if (!id || isLoading) return null;

  const description = descriptionBlocks.map((block) => (
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
            <CircularProjectImage image={image} />
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
          <h1 className="bold">{title}</h1>
          <p className="modal-description">{description}</p>
          <div className="modal-buttons flex">
            <Button text="Github Repo" link={URL} color="none" type="underline" />
            <Button
              text="Play Now"
              link="http://www.thorherman.com/play.html"
              color="green"
            />
          </div>
        </div>
        <IconButton type="close" size="large" onClick={() => history.push('/')} />
      </div>
    </div>
  );
};

export default ProjectModal;
