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
        <a href="https://github.com/Mic-hvel">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/temitope-ogunyemi/">
          <FaLinkedin />
        </a>
        <a href="instagram.com">
          <FaInstagram />
        </a>
        <a href="https://docs.google.com/document/d/1DhtbqTKuWA3DsXAFgxFAnZhP_irFCOBGHXkQXYYoS1U">
          <FaFilePdf />
        </a>
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
