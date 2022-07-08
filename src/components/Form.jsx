import React from "react";
import { Button } from "./Button";
import Card from "./shared/Card";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

export const Form = () => {
  const { addItem, currEdit, updateItem } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("HElLO");
    if (currEdit.edit) {
      setBtnDisabled(false);
      setText(currEdit.item.text);
      setRating(currEdit.item.rating);
    }
  }, [currEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length < 5) {
      window.alert("Please enter more than 5 characters");
      return;
    }
    const newFeedback = {
      text: text,
      rating: rating,
      id: uuidv4(),
    };

    if (currEdit.edit) {
      const edited = {
        text,
        rating,
      };
      updateItem(currEdit.item.id, edited);
      
    } else {
      addItem(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Service Rating</h2>

        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={(e) => {
              setText(e.target.value);

              if (e.target.value === "") {
                setBtnDisabled(true);
                setMessage("");
              } else if (
                e.target.value !== "" &&
                e.target.value.trim().length < 5
              ) {
                setBtnDisabled(true);
                setMessage("Should be atleast 5 characters long");
              } else {
                setBtnDisabled(false);
                setMessage("");
              }
            }}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} />
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};
