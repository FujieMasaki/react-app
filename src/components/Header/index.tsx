import Link from "next/link";
import classes from "./Header.module.css";

const nav_items = [
  { href: "/", label: "Index" },
  { href: "/", label: "Index" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {nav_items.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <div className={classes.anchor}>{item.label}</div>
          </Link>
        );
      })}
    </header>
  );
};
