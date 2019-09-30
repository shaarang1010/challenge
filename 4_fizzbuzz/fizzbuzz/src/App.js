import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Array.from({ length: 100 })
          .map((_, n) =>
            n === 3 ? "Fizz" : n === 5 ? "Buzz" : n === 15 ? "FizzBuzz" : n
          )
          .join(", ")}
      </header>
    </div>
  );
}

export default App;
