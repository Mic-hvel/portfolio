import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("false");

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <header className="header">
      <div className={theme ? "dark-theme" : "light-theme"}>
        <div className="header-content">
          <div className="pp">
            <img src="./images/header.jpeg" alt="profile" />{" "}
          </div>

          <div className="header-nav">
            <ul>
              <li>
                <button className="button" onClick={changeTheme}></button>
              </li>
              <li>
                <a href="/project">PROJECTS</a>
              </li>
              <li>
                <a href="google.com">RESUME</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
