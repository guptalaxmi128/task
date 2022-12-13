import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
    //   console.log(i);
      setCount(prevCount =>prevCount + 1);
    }
  };

  return (
    <>
      <div>Count :{count}</div>
      <button onClick={() => setCount(prevCount =>prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount =>prevCount + 1)}>Decrement</button>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => incrementFive()}>Increment 5</button>
    </>
  );
};

export default HookCounterTwo;
