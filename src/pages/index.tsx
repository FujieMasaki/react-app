import Image from "next/image";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useEffect, useState, useCallback } from "react";

import styles from "src/styles/Home.module.css";

type Event = {
  text: Text;
};

type Text = {
  value: string;
};

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [array, setArray] = useState([]);

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

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("既に同じ要素の値があります");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = useCallback((e) => {
    setText(e.text.value);
  }, []);

  return (
    <div className={styles.container}>
      <title>Create Next App</title>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <button onClick={handleAdd}>配列を追加</button>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page={"index"} />
      <Footer />
    </div>
  );
}
