import React from "react";

const Card = ({ children, mark }) => {
  var v = mark ? "card reversea" : "card reverse";

  return <div className={v}>{children}</div>;
};

export default Card;
