import React from "react";
import "./Content.css";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, setItems, handleDelete, handleCheck }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li
            onChange={() => handleCheck(item.id)}
            className="item"
            key={item.id}
          >
            <input type="checkbox" checked={item.checked} />
            <label onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
