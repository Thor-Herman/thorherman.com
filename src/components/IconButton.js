import React, { useState } from 'react';
import './IconButton.css';
import { ReactComponent as Close } from '../assets/close_white_24dp.svg';

const svgTypes = {
  close: <Close />,
};

const IconButton = ({ type, size="small", onClick }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false); // :hover property doesn't seem to work with a lower z-index
  const bgClassName = isBeingHovered ? 'background hovered' : 'background';

  if (type in svgTypes)
    return (
      <button
        onMouseLeave={() => setIsBeingHovered(false)}
        onMouseEnter={() => setIsBeingHovered(true)}
        onClick={() => onClick()}
        className={"icon-button pointer-hover " + size}
      >
        {svgTypes[type]}
        <div className={bgClassName} />
      </button>
    );
  return null;
};

export default IconButton;
