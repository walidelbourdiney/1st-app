import React from "react";
import "./Content.css";

const Content = () => {
  const audience = ["Walid", "Ali", "World"];
  const int = Math.floor(Math.random() * 3);
  const name = audience[int];
  return (
    <main>
      <p>Hello, {name}!</p>
    </main>
  );
};

export default Content;
