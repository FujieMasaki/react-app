import { useState, useCallback, useMemo } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay, doubleCount };
};
