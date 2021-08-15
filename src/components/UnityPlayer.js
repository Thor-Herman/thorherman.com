import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from './IconButton';
import Unity, { UnityContent } from 'react-unity-webgl';

import './UnityPlayer.css';
const unityContent = new UnityContent('/build/build.json', '/build/loader.js');

const UnityPlayer = () => {
  const [progression, setProgression] = useState(0);
  const history = useHistory();

  useEffect(() => {
    unityContent.on('progress', (progression) => {
      setProgression(progression);
    });
  }, []);

  console.log(progression);

  const loading =
    progression < 1 ? (
      <div className="unity-loader">
        <p>
          Loading... {Math.round(progression * 100)} percent
        </p>
      </div>
    ) : null;

  return (
    <div className="project-modal-bg">
      <div className="modal unity">
        <IconButton type="close" size="large" onClick={() => history.push('/')} />
        {loading}
        <Unity unityContent={unityContent} />
      </div>
    </div>
  );
};

export default UnityPlayer;
