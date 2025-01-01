import "./App.css";
import Header from "./Header";
import Content from "./Content";

function App() {
  const audience = ["Walid", "Ali", "World"];
  const int = Math.floor(Math.random() * 3);
  const name = audience[int];
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
