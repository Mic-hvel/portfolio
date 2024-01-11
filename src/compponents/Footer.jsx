import React, { useEffect, useState } from "react";
import { FaFilePdf, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date());

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentYear(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [currentYear]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <div className="footer-content">
      <div className="location-time">
        <span className="location">LAGOS, NG</span>{" "}
        {currentTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="icons">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
        <FaFilePdf />
      </div>
      <div className="copyright">
        {" "}
        <span className="symbol"> &copy;</span>
        <span className="year">{currentYear.getFullYear()} </span>
      </div>
    </div>
  );
};

export default Footer;
