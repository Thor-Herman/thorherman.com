import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const PlayButton = ({ playableLink, external }) => {
  if (!playableLink) return null;
  if (external) return <Button color="green" text="Play Now" link={playableLink} />;
  return (
    <Link to={playableLink}>
      <Button color="green" text="Play Now" />
    </Link>
  );
};

export default PlayButton;
