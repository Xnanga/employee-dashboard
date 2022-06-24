import styles from "./EmployeeList.module.css";

import EmployeeWidget from "./EmployeeWidget";

const EmployeeList = (props) => {
  return (
    <div className={styles["employee-list"]}>
      <EmployeeWidget />
      <EmployeeWidget />
      <EmployeeWidget />
      <EmployeeWidget />
      <EmployeeWidget />
      <EmployeeWidget />
      <EmployeeWidget />
      <EmployeeWidget />
    </div>
  );
};

export default EmployeeList;
