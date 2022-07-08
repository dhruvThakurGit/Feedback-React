import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingsSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const { currEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (currEdit.edit) {
      setSelected(currEdit.item.rating);
    }
  }, [currEdit]);

  const handleChange = (i) => {
    setSelected(+i);
    select(+i);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={() => {
              handleChange(i + 1);
            }}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingsSelect;
