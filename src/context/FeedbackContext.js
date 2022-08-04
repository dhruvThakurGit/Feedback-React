import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchJson();
      setFeedback(data);
    };

    getData();
  }, []);

  async function deleteItem(id) {
    console.log("deleting " + id);

    if (window.confirm("Are you sure?")) {
      await fetch("/feedback/" + id, { method: "DELETE" });
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  async function addItem(newFeedback) {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  }

  async function updateItem(id, newItem) {
    const res = await fetch("/feedback/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const data = await res.json();

    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return {
            id,
            rating: data.rating,
            text: data.text,
          };
        } else return item;
      })
    );

    currEdit.edit = false;
    currEdit.item = {};
  }

  async function fetchJson(id = "") {
    const addr = "/feedback/" + id;
    const db = await fetch(addr);
    const Json = await db.json();

    setLoading(false);
    return Json;
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
