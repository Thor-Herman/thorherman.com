import _ from 'lodash';
import React from 'react';

function NavBarElement(props) {
  const isActiveElement = props.sectionName === props.activeSection;
  const className = "navbar-element roboto " + (isActiveElement ? "active" : "");
  return (
    <li
      className={className}
      onClick={() => {
        props.onClick(props.sectionName);
      }}
    >
      {_.capitalize(props.sectionName)}
    </li>
  );
}

export default NavBarElement;
