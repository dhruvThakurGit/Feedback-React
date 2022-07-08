import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>This is a React App for feedback</p>
        <p>Version: 1.0.1</p>
        <p>
          <Link to="/"> Home </Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
