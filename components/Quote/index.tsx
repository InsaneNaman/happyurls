import styles from "./quote.module.scss";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  //   const response = await fetch("/api/hello");
  //   const quote = await response.json();
  return {
    revalidate: 1,
    props: {
      msg: "ok",
    },
  };
};
export default function Quote(props) {
  return (
    <div className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-10`}>
      <span>{props.msg}</span>
      <span className={`${styles.quoteMain}`}>{props.main}</span>
      <span>{props.suffix}</span>
    </div>
  );
}
