import Image from "next/image";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useEffect } from "react";

import styles from "src/styles/Home.module.css";

export default function Home() {
  // const handleClick = useCallback((e) => {
  //   console.log(e.target);
  //   e.preventDefault();
  // });

  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <title>Create Next App</title>
      <Header />
      {/* eにはeventをクリックした時の要素が入る
      <a href="/about" onClick={handleClick}>
        ボタン
      </a> */}

      <Main page={"index"} />

      <Footer />
    </div>
  );
}
