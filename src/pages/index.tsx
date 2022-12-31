import Image from "next/image";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useEffect } from "react";

import styles from "src/styles/Home.module.css";

type Event = {
  text: Text;
};

type Text = {
  value: string;
};

const Home = (props: any) => {
  return (
    <div className={styles.container}>
      <title>Create Next App</title>
      <Header />
      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <button onClick={props.handleAdd}>配列を追加</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page={"index"} />
      <Footer />
    </div>
  );
};

export default Home;
