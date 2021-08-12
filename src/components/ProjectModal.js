import React, { useState } from 'react';
import Button from './Button';
import './ProjectModal.css';
import Khabu from '../assets/khabu.png';
import IconButton from './IconButton';

const ProjectModal = ({ active }) => {
  const [isActive, setIsActive] = useState(active);
  if (!isActive) return null;
  return (
    <div className="project-modal-bg">
      <div className="modal">
        <div className="">
          <div className="image-container">
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
                  href={Khabu}
                />
              </g>
            </svg>
          </div>
          <div className="technologies">
            <h4 className="underline">Technologies</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Spring Boot</li>
              <li>AWS EBS</li>
              <li>AWS CodePipeline</li>
              <li>Websockets</li>
            </ul>
          </div>
        </div>
        <div className="modal-second-column">
          <h1 className="bold">KHABU</h1>
          <p className="modal-description">
            After our summer internships for 2020 were cancelled due to the outbreak
            of COVID-19, a friend and I applied to Netlight's summer sprint
            initiative. The initiative was started as a response to the many
            internship cancellations students were experiencing. Netlight offered to
            help those who wanted to work on a personal and technical project
            throughout the summer by arranging weekly standups and having experienced
            consultants at disposal. My friend and I had previously talked about
            creating a digitalized version of our favorite card-game, 'Khabu'. This
            seemed like the perfect opportunity to realize those plans.
            <br />
            <br />
            We worked from june to august, with me on the frontend and my friend
            working backend. The stack we had chosen was React Redux and Spring Boot,
            mainly due to the fact that we were somewhat familiar with them. Upon
            researching more, and through encouragement from the consultants, we also
            utilized AWS EBS and CodePipeline. The project started with sketching the
            flow of the game through different charts, and creating a mockup in
            Figma. Notion was also utilized as our workspace, in order to keep track
            of issues, and to keep all documentation in one place. Since the work was
            unpaid, we did not have a strict schedule. However, we worked from
            somewhere around 6-8 hours a day on the weekdays. In the end, we achieved
            most of the essential functionality of the card-game, with the hopes of
            someday adding 4-player mode...
          </p>
          <div className="modal-buttons flex">
            <Button
              text="Github Repo"
              link="https://github.com/SondreODahl/khabu"
              color="none"
              type="underline"
            />
            <Button
              text="Play Now"
              link="http://www.thorherman.com/play.html"
              color="green"
            />
          </div>
        </div>
        <IconButton type="close" size="large" onClick={() => setIsActive(!isActive)}/>
      </div>
    </div>
  );
};

export default ProjectModal;
