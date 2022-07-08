import React from "react";

const Header = ({ text }) => {
  const headerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#ff6a95",
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1> {text} </h1>
      </div>
    </header>
  );
};

export default Header;
