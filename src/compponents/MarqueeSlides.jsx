import React from "react";
import "./marquee.scss";
import Marquee from "react-fast-marquee";
import {
  faGithub,
  faNodeJs,
  faReact,
  faPython,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const MarqueeSlides = () => {
  return (
    <div className="skills">
      <Marquee>
        <div className="tech-stacks front">
          <span className="icon">
            <FontAwesomeIcon icon={faNodeJs} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faReact} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faPython} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faDatabase} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faVuejs} />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlides;
