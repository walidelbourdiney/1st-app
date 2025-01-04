import React from "react";
import "./Content.css";
import ItemList from "./ItemList";

const Content = ({ items, handleDelete, handleCheck }) => {
  return (
    <main>
      <ItemList
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </main>
  );
};

export default Content;
