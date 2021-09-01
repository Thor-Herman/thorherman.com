import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import IconButton from './IconButton';
import VideoPlayer from './VideoPlayer';
import './UnityPlayer.css';

const UnityPlayer = () => {
  const { id } = useParams();
  const history = useHistory();
  return (
    <div className="project-modal-bg">
      <div className="modal unity">
        <p className="fullscreen-text">Press f for fullscreen</p>
        <IconButton type="close" size="large" onClick={() => history.push('/')} />
        <VideoPlayer src={`https://itch.io/embed-upload/${id}?color=333333`} />
      </div>
    </div>
  );
};

export default UnityPlayer;
