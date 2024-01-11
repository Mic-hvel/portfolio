import React from "react";

const Header = () => {
  return (
    <div className="header-content">
      <div className="pp">
        <img src="./images/header.jpeg" alt="profile" />{" "}
      </div>

      <div className="header-nav">
        <span>
          <a href="google.com">PROJECTS</a>
        </span>
        <span>
          <a href="google.com">RESUME</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
