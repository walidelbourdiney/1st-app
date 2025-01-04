import React from "react";
import "./Content.css";
import ItemList from "./ItemList";
import Line from "./Line";

const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <p style={{ textAlign: "center" }}>You have no Tasks</p>
      )}
    </main>
  );
};

export default Content;
