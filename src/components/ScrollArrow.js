import React from 'react';
import { ReactComponent as ScrollArrowSVG } from '../assets/ScrollArrow.svg';
import { Link } from 'react-scroll';

const ScrollArrow = ({ elementIdToScrollTo, duration }) => {
  return (
    <Link to={elementIdToScrollTo} duration={duration} smooth={true}>
      <ScrollArrowSVG className={'scroll-arrow'} />
    </Link>
  );
};

export default ScrollArrow;
