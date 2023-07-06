import React, { useLayoutEffect, useState } from "react";

const resizeHandler = (
  setSmaller: React.Dispatch<React.SetStateAction<boolean>>,
  width: number
) => {
  setSmaller(window.innerWidth <= width);
};

function useWidth(width: number) {
  //STATES
  const [smaller, setSmaller] = useState(false);

  //LIFE CYCLE HOOKS
  useLayoutEffect(() => {
    resizeHandler(setSmaller, width);
    window.addEventListener("resize", () => resizeHandler(setSmaller, width));
    return () => {
      window.removeEventListener("resize", () =>
        resizeHandler(setSmaller, width)
      );
    };
  }, [width]);

  return smaller;
}

export default useWidth;
