import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Line = ({ item, handleDelete, handleCheck }) => {
  return (
    <li onChange={() => handleCheck(item.id)} className="item" key={item.id}>
      <input type="checkbox" checked={item.checked} />
      <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default Line;
