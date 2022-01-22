import React, { useState } from "react";
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleDecrementBtn = () => {
    if(count > 0){
      setCount(count - 1)
    } else{
      setError(true);
    }
  };

  return (
    <div data-test='app-component'>
      <h1 data-test='counter-display'>The counter is currently {/*  */}
        <span data-test='count'>{count}</span>
      </h1>
      <button data-test='increment-button' onClick={() => {
        error && setError(false)
        setCount(count + 1)
      }}>Increment</button>
      <button data-test='decrement-button' onClick={handleDecrementBtn}>Decrement</button>

      <p data-test='error' className={`error ${error ? '' : 'hidden'}`}>Counter can't go below zero</p>
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
