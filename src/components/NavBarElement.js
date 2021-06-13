import _ from 'lodash';
import React from 'react';
import { Link } from 'react-scroll';

function NavBarElement(props) {
  const isActiveElement = props.sectionName === props.activeSection;
  const className = 'navbar-element roboto ' + (isActiveElement ? 'active' : '');
  return (
    <li className={className}>
      <Link
        to={props.sectionName.toLowerCase() + '-section'}
        smooth={true}
        onClick={() => {
          props.onClick(props.sectionName);
        }}
        className={"pointer-hover"}
      >
        {_.capitalize(props.sectionName)}
      </Link>
    </li>
  );
}

export default NavBarElement;
