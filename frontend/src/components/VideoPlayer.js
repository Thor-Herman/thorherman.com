import React, { useRef } from 'react';
import './VideoPlayer.css'

const VideoPlayer = ({ src }) => {
  return (
  <div className="video-player">
        <iframe
          title={'Project Video Player'}
          src={src}
          frameBorder={0}
          scrolling="no"
          allow="fullscreen"
        />
      
  </div>);
};

export default VideoPlayer;
