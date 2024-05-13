import React, { useEffect, useState } from 'react';
import NavBarElement from './NavBarElement';
import './NavBar.css';

const NavBar = ({ sectionNames }) => {
  const sectionDOMHeights = [];
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  const calculateSectionDOMHeights = () => {
    sectionNames.forEach((section) => {
      const className = section.toLowerCase() + '-section';
      const height = document.getElementById(className).clientHeight;
      sectionDOMHeights.push(height);
    });
  };

  const onScroll = () => {
    const cumulativeSumDOMHeights = getCumulativeDOMHeights();
    const sectionUserIsAt = getSectionUserIsAtName(cumulativeSumDOMHeights);
    if (activeSection !== sectionUserIsAt) {
      setActiveSection(sectionUserIsAt);
    }
  };

  useEffect(() => {
    calculateSectionDOMHeights(); // Should be recaculated on window resize
    window.addEventListener('scroll', onScroll, { passive: true }); // MUST REREIGSTER ON ACTIVESECTION UPDATE BECAUSE STATE IS STALE INSIDE LISTENER
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeSection]);

  const getCumulativeDOMHeights = () => {
    const cumulativeSum = [];
    sectionDOMHeights.reduce((prev, curr, i) => (cumulativeSum[i] = prev + curr), 0);
    return cumulativeSum;
  };

  const getSectionUserIsAtName = (cumulativeSum) => {
    const sectionUserIsAt = cumulativeSum.find(
      (scrollHeight) =>
        scrollHeight > window.pageYOffset + (window.innerHeight * 2) / 3
    );
    const sectionIndex = cumulativeSum.indexOf(sectionUserIsAt);
    return sectionNames[sectionIndex];
  };

  const sectionElements = sectionNames.map((sectionName) => (
    <NavBarElement
      activeSection={activeSection}
      sectionName={sectionName}
      key={sectionName}
    />
  ));
  return <ul className="navbar">{sectionElements}</ul>;
};

export default NavBar;
