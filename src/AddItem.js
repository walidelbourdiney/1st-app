import React from "react";
import { CgAdd } from "react-icons/cg";
import "./AddItem.css";

const AddItem = () => {
  return (
    <form>
      <label>Add Item</label>
      <input type="text" required />
      <CgAdd />
    </form>
  );
};

export default AddItem;
