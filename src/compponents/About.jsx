import React from "react";

const About = () => {
  return (
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
                href="https://www.linkedin.com"
                aria-describedby="linkedin"
                aria-labelledby="linkedin"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
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
  );
};

export default About;
