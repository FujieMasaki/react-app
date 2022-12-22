import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("既に同じ要素の値があります");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  const handleChange = useCallback((e) => {
    setText(e.text.value);
  }, []);
  return { text, array, handleAdd, handleChange };
};
