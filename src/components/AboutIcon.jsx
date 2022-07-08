import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const AboutIcon = () => {
  if (useLocation().pathname === "/") {
    return (
      <div className="about-link">
        <Link to="/about">
          <FaQuestion size={30} />
        </Link>
      </div>
    );
  }
  return;
};

export default AboutIcon;
