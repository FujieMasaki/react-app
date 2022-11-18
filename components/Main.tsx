import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "./Main.module.css";

type Main = {
  page: string;
};

export function Main(props: Main) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
