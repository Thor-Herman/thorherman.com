import _ from 'lodash';
import React from 'react';

function NavBarElement(props) {
  const isActiveElement = props.sectionName === props.activeSection;
  const className = "navbar-element " + (isActiveElement ? "active" : "");
  return (
    <ul
      className={className}
      onClick={() => {
        props.onClick(props.sectionName);
      }}
    >
      {_.capitalize(props.sectionName)}
    </ul>
  );
}

export default NavBarElement;
