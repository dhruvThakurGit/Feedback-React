import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 1,
      text: "Feedback 1",
    },
    {
      id: 2,
      rating: 9,
      text: "Feedback 2",
    },
    {
      id: 3,
      rating: 8,
      text: "Feedback 3",
    },
  ]);

  function deleteItem(id) {
    console.log("deleting " + id);

    if (window.confirm("Are you sure?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  function addItem(newFeedback) {
    setFeedback([newFeedback, ...feedback]);
  }

  function updateItem(id, newItem) {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return {
            id,
            rating: newItem.rating,
            text: newItem.text,
          };
        } else return item;
      })
    );
    currEdit.edit = false;
    currEdit.item = {};
  }

  const [currEdit, setCurrItem] = useState({
    item: {},
    edit: false,
  });

  function editItem(item) {
    console.log("Editing ");
    setCurrItem({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addItem,
        editItem,
        currEdit,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
