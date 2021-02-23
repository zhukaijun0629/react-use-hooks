import React from "react";
import { useTheme } from "./ThemeContext";

const FunctionContextComponent = () => {
  const { toggleTheme, themeStyles } = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default FunctionContextComponent;
