import Image from "next/image";
import { ReactNode } from "react";
import classes from "./Headline.module.css";

type Headline = {
  page: string;
  children: ReactNode;
};

type Obj = {
  foo: string;
  bar: string;
};
export function Headline(props: Headline) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>
      <p className={classes.description}>
        アイテムの数は{props.children}個です。
      </p>
    </div>
  );
}
