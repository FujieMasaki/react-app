import { Headline } from "src/components/Headline";
import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { useEffect } from "react";

type Main = {
  page: string;
};

useEffect(() => {
  console.log("マウント");
  document.body.style.backgroundColor = "lightblue";
  return () => {
    console.log("アンマウント");
    document.body.style.backgroundColor = "";
  };
}, []);

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
