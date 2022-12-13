import React, { useState, useEffect } from "react";

const HookCounterEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("update document title")
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName( e.target.value )}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default HookCounterEffect;
