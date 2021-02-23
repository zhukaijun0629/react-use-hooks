import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return ()=>{
      // clean up function, will be ran first
      // also used when the element unmount
      window.removeEventListener('resize',handleResize)
    }
  }, [])


  return (
    
      <div>
        {windowWidth}
      </div>

  );
};

export default UseEffect2;
