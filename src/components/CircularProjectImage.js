import React from 'react';

const CircularProjectImage = ({image}) => {
  return (
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
          href={image}
        />
      </g>
    </svg>
  );
}

export default CircularProjectImage;