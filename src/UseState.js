import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');


  function decrementCount() {
    setCount((count) => count - 1);
    setTheme('blue');
  }

  function incrementCount() {
    setCount((count) => count + 1);
    setTheme('red');
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default UseState;
