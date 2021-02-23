import React, { useState } from "react";
import UseLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function App() {
  const [name, setName] = UseLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
