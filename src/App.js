import "./App.css";

function App() {
  const audience = ["Walid", "Ali", "World"];
  const int = Math.floor(Math.random() * 3);
  const name = audience[int];
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, {name}!</p>
      </header>
    </div>
  );
}

export default App;
