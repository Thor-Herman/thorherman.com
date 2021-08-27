import React, { useEffect, useState } from 'react';
import './ProjectModal.css';
import { useParams } from 'react-router-dom';
import client from '../api/sanityClient';
import ProjectModalBody from './ProjectModalBody';

const ProjectModal = () => {
  const [loadTime, setLoadTime] = useState(0);
  const [data, setData] = useState(null);

  // @ts-ignore
  const { id } = useParams();

  useEffect(() => { // Remove outer scrollbar
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  })

  useEffect(() => {
    const loadTimeId = setInterval(() => {
      setLoadTime((load) => load + 500);
    }, 500);
    const query =
      "*[_type == 'project' && slug.current == $id] {name, 'imageUrl': image.asset->url, description, technologies, githubURL, playURL, externalLink, iFrameURL}";
    const params = { id };
    client.fetch(query, params).then((result) => setData(result[0]));
    clearInterval(loadTimeId);
    setLoadTime(0);
  }, [id]);

  if (loadTime > 1000) return <p className="loading-message">Loading...</p>;
  if (!id || !data) return null;

  const {
    name,
    imageUrl,
    description,
    technologies,
    githubURL,
    playURL,
    externalLink,
    iFrameURL,
  } = data;
  const descriptionJSX = description.map((block) => (
    <p key={block.children[0].text}>
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
      externalLink={externalLink}
      iFrameURL={iFrameURL}
    />
  );
};

export default ProjectModal;
