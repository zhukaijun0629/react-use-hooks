import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const prevName = useRef("");
  // {current: 0}

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const inputRef = useRef();
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name}, and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseRef;
