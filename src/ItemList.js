import React from "react";
import Line from "./Line";
const ItemList = ({ items, handleDelete, handleCheck }) => {
  return (
    <ul>
      {items.map((item) => (
        <Line
          item={item}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemList;
