import React from "react";
import "./Content.css";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Walid");

  const handleChange = () => {
    const audience = ["Walid", "Ali", "World"];
    const int = Math.floor(Math.random() * 3);
    setName(audience[int]);
  };

  return (
    <main>
      <p>Hello, {name}!</p>
      <button onClick={handleChange}>Change Name</button>
    </main>
  );
};

export default Content;
