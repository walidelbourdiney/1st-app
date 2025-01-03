import React from "react";
import "./Content.css";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Walid");
  let [count, setCount] = useState(0);
  const handleChange = () => {
    const audience = ["Walid", "Ali", "World"];
    const int = Math.floor(Math.random() * 3);
    setName(audience[int]);
  };
  const handleCount = () => {
    count++;
    setCount(count);
  };

  return (
    <main>
      <p>Hello, {name}!</p>
      <button onClick={handleChange}>Change Name</button>
      <p>{count}</p>
      <button onClick={handleCount}>Change count</button>
    </main>
  );
};

export default Content;
