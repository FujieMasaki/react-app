import Image from "next/image";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useEffect } from "react";

import styles from "src/styles/Home.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

type Event = {
  text: Text;
};

type Text = {
  value: string;
};

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleAdd, handleChange } = useInputArray();
  useBgLightBlue();

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
