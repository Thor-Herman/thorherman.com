import _ from 'lodash';
import React from 'react';
import { Link as ReactScrollLink } from 'react-scroll';

function NavBarElement(props) {
  const isActiveElement = props.sectionName === props.activeSection;
  const className = 'navbar-element roboto ' + (isActiveElement ? 'active' : '');
  return (
    <li className={className}>
      <ReactScrollLink
        to={props.sectionName.toLowerCase() + '-section'}
        smooth={true}
        className={"pointer-hover"}
      >
        {_.capitalize(props.sectionName)}
      </ReactScrollLink>
    </li>
  );
}

export default NavBarElement;
