import React, { useEffect, useState } from 'react';
import './ProjectModal.css';
import { useParams } from 'react-router-dom';
import client from '../api/sanityClient';
import ProjectModalBody from './ProjectModalBody';

const ProjectModal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // @ts-ignore
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const query =
      "*[_type == 'project' && slug.current == $id] {name, 'imageUrl': image.asset->url, description, technologies, githubURL, playURL, playable}";
    const params = { id };
    client.fetch(query, params).then((result) => {
      setData(result[0]);
    });
    setIsLoading(false);
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!id || !data) return null;

  const { name, imageUrl, description, technologies, githubURL, playURL, playable } =
    data;
  const descriptionJSX = description.map((block) => (
    <p>
      {block.children[0].text} <br />
      <br />
    </p>
  ));
  const technologiesJSX = technologies.map((tech) => <li key={tech}>{tech}</li>);

  return (
    <ProjectModalBody
      name={name}
      imageUrl={imageUrl}
      technologiesJSX={technologiesJSX}
      githubURL={githubURL}
      descriptionJSX={descriptionJSX}
      playURL={playURL}
      playable={playable}
    />
  );
};

export default ProjectModal;
