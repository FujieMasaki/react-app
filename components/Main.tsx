import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

type Main = {
  page: string;
};

export function Main(props: Main) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
