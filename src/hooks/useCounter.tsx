import { useState, useCallback } from "react";

export type Counter = {
  count: number;
  isShow: boolean;
  handleClick: (e: any) => void;
  handleDisplay: () => void;
};

export const useCounter: Counter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);

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

  return { count, isShow, handleClick, handleDisplay };
};
