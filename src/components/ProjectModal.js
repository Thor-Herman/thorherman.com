import React, { useEffect, useState } from 'react';
import Button from './Button';
import './ProjectModal.css';
import Khabu from '../assets/khabu.png';
import IconButton from './IconButton';
import { useParams } from 'react-router-dom';
import client from '../api/sanityClient';

const ProjectModal = ({ active }) => {
  const [title, setTitle] = useState('');
  const [descriptionBlocks, setDescriptionBlocks] = useState([]);
  const [URL, setURL] = useState(['']);
  const [technologies, setTechnologies] = useState([]);

  const query = "*[_type == 'project' && name == 'Khabu']";
  useEffect(() => {
    client.fetch(query).then((result) => {
      setTitle(result[0].name);
      setDescriptionBlocks(result[0].description);
      setTechnologies(result[0].technologies);
      setURL(result[0].URL);
    });
  }, [query]);

  const { id } = useParams();

  if (!id) return null;

  const description = descriptionBlocks.map((block) => (
    <p>
      {block.children[0].text} <br /><br/>
    </p>
  ));

  // const [isActive, setIsActive] = useState(active);
  // if (!isActive) return null;
  return (
    <div className="project-modal-bg">
      <div className="modal">
        <div className="">
          <div className="image-container">
            <svg id="circular-project-image" viewBox="0 0 100 100">
              <clipPath id="myClip">
                <circle cx="25" cy="35" r="50" />
              </clipPath>
              <rect
                width="100"
                height="100"
                clip-path="url(#myClip)"
                fill="rgba(255, 255, 255, 0.25)"
              />
              <g clip-path="url(#myClip)">
                <image
                  transform="rotate(30, 50, 20)"
                  width="120"
                  height="auto"
                  x="-25"
                  y="0"
                  href={Khabu}
                />
              </g>
            </svg>
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
        <IconButton type="close" size="large" />
      </div>
    </div>
  );
};

export default ProjectModal;
