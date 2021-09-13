import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {setCounter(counter+1)}
  const decrement = () => {setCounter(counter-1)}
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={increment}>+</button>
        <h2>
          {counter}
        </h2>
        <button type="button" onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default App;
