import { useState, useEffect } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  // get root size to convert it to rem
  const rootFontSize = getComputedStyle(document.documentElement).fontSize;
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return width / parseFloat(rootFontSize); // convert px to rem
}

export default useWindowSize;
