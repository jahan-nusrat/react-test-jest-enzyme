import React from "react";
import './App.css';

const App = () => {
  return (
    <div data-test='app-component'>
      <h1 data-test='counter-display'>The counter is</h1>
      <button data-test='increment-button'>Increment Button</button>
    </div>
  );
}

export default App;

/* <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp; 
        <span data-test="count">{count}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
    </div> */
