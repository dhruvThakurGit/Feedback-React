import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import spinner from "../assets/spinner.gif";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h1>No Feedback</h1>;
  }

  if (isLoading) {
    return (
      <img
        src={spinner}
        alt="Loading ..."
        style={{
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      />
    );
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FeedbackList;
