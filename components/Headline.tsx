import Image from "next/image";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";

type Headline = {
  page: string;
  children: ReactNode;
};

type Obj = {
  foo: string;
  bar: string;
};
export function Headline(props: Headline) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        Get started by editing
        {props.children}
      </p>
    </div>
  );
}
