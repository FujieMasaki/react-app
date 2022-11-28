import Image from "next/image";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

import styles from "src/style/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <title>Create Next App</title>
      <Header />

      <Main page={"index"} />

      <Footer />
    </div>
  );
}
