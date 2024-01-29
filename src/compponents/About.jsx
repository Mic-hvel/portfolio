import React from "react";
import MarqueeSlides from "./MarqueeSlides";

const About = () => {
  return (
    <body>
      <div className="about">
        <div className="name">
          <h1>Hello,</h1>
          <h1>I'm Temitope</h1>
        </div>
        <section>
          <div className="contact">
            <ul>
              <li>
                <a
                  href="mailto:o.temitopemichael@gmail.com"
                  aria-describedby="email"
                  aria-labelledby="email"
                >
                  EMAIL
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/temitope-ogunyemi/"
                  aria-describedby="linkedin"
                  aria-labelledby="linkedin"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mic-hvel"
                  aria-describedby="github"
                  aria-labelledby="github"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com"
                  aria-describedby="twitter"
                  aria-labelledby="twitter"
                >
                  TWITTER
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
    </body>
  );
};

export default About;
