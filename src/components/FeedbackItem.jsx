import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteItem, editItem } = useContext(FeedbackContext);
  const [mark, setMark] = useState(false);

  return (
    <Card mark={mark}>
      <div className="num-display">{item.rating}</div>

      <button
        className="close"
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        <FaTimes color="purple" />
      </button>

      <button
        className="edit"
        onClick={() => {
          editItem(item);
          setMark(true);

          setTimeout(() => {
            setMark(false);
          }, 1000);
        }}
      >
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
