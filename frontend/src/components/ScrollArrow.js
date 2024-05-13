import React from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as ScrollArrowSVG } from '../assets/ScrollArrow.svg';
import './ScrollArrow.css';

const ScrollArrow = ({ elementIdToScrollTo, duration }) => {
  return (
    <Link to={elementIdToScrollTo} duration={duration} smooth={true}>
      <ScrollArrowSVG className={'scroll-arrow'} />
    </Link>
  );
};

export default ScrollArrow;
