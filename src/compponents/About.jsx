import React, { useState } from "react";
import MarqueeSlides from "./MarqueeSlides";
import { useSelector, useDispatch } from "react-redux";
import {
  goldTheme,
  lightTheme,
  violetTheme,
  orangeTheme,
} from "../redux/theme/themeSlice";

const About = () => {
  const [color, setColor] = useState("");
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function handleThemeChange(theme) {
    if (theme === "light") {
      dispatch(goldTheme(color));
      setColor("");
    } else if (theme === "dark-theme") {
      dispatch(lightTheme(color));
      setColor("");
    } else if (theme === "light-theme") {
      dispatch(violetTheme(color));
      setColor("");
    } else {
      dispatch(orangeTheme(color));
      setColor("");
    }
  }

  return (
    <div className={theme}>
      <div className="about">
        <div className="name">
          <h1>Hello,</h1>
          <h1>I'm Temitope</h1>
        </div>
        <section>
          <div className="contact">
            <ul>
              <li>
                <button className="button" onClick={handleThemeChange}>
                  {theme}
                </button>
              </li>
              <li>
                <a
                  href="mailto:o.temitopemichael@gmail.com"
                  aria-describedby="email"
                  aria-labelledby="email"
                >
                  EMAIL
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 5 30"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/temitope-ogunyemi/"
                  aria-describedby="linkedin"
                  aria-labelledby="linkedin"
                >
                  LINKEDIN
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 5 30"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mic-hvel"
                  aria-describedby="github"
                  aria-labelledby="github"
                >
                  GITHUB
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 5 30"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com"
                  aria-describedby="twitter"
                  aria-labelledby="twitter"
                >
                  TWITTER
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 5 30"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="story">
            <p>
              I am a developer based in Lagos, <br />
              Nigeria focused on creating interactive digital experiences on the
              web
            </p>
          </div>
        </section>
      </div>
      <MarqueeSlides />
    </div>
  );
};

export default About;
