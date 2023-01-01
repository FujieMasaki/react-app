import classes from "src/components/Links/Links.module.css";

type Links = {
  items: Items[];
  handleReduce: () => void;
};

type Items = { href: string; title: string; description: string };

export const Links = ({ items, handleReduce }: Links) => {
  return (
    <div className={classes.grid}>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h2> {item.title} </h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
