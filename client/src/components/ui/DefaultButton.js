import styles from "./DefaultButton.module.css";

const DefaultButton = (props) => {
  const determineClassName = (btnColor) => {
    if (!btnColor) {
      return `${styles["default-btn"]}`;
    } else {
      const btnClass = btnColor.toLowerCase();
      return `${styles["default-btn"]} ${styles[btnClass]}`;
    }
  };

  return (
    <button
      className={determineClassName(props.btnColor)}
      onClick={props.btnAction}
    >
      {props.btnLabel}
    </button>
  );
};

export default DefaultButton;
