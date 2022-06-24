import styles from "./MainBodyLayout.module.css";

const MainBodyLayout = (props) => {
  return <main className={styles["main-body-layout"]}>{props.children}</main>;
};

export default MainBodyLayout;
