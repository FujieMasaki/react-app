import { Headline } from "src/components/Headline";
import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";

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
