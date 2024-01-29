import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="pp">
          <img src="./images/header.jpeg" alt="profile" />{" "}
        </div>

        <div className="header-nav">
          <span>
            <a href="/project">PROJECTS</a>
          </span>
          <span>
            <a href="google.com">RESUME</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
