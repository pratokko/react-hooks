import React, { useState } from "react";

function HookCounterTwo() {
  const inititalCount = 0;
  const [count, setCount] = useState(inititalCount);

   const incrementFive = () => {
    for(let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1)
    }
   }
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
      <button onClick={() => setCount(inititalCount)}>reset</button>
      <button onClick={incrementFive}>increment5</button>
    </div>
  );
}

export default HookCounterTwo;
