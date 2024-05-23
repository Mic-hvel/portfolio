import React from "react";
import MarqueeSlides from "./MarqueeSlides";
import { useSelector, useDispatch } from "react-redux";
import {
  goldTheme,
  lightTheme,
  orangeTheme,
  violetTheme,
} from "../redux/theme/themeSlice";

const About = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function handleThemeChange() {
    if (theme === "violet") {
      dispatch(violetTheme());
    }
    if (theme === "light-theme") {
      dispatch(goldTheme());
    }
    if (theme === "dark-theme") {
      dispatch(orangeTheme());
    }
    if (theme === "light") {
      dispatch(lightTheme());
    }
  }

  return (
    <div>
      <div className="about">
        <div className="name">
          <h1>Hello,</h1>
          <h1>I'm Michael</h1>
        </div>
        <section>
          <div className="contact">
            <ul>
              <li>
                {/* <button
                  className="button"
                  onClick={() => handleThemeChange()}
                ></button> */}
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
