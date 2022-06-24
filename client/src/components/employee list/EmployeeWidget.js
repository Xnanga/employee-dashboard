import { Link } from "react-router-dom";

import styles from "./EmployeeWidget.module.css";

import DefaultButton from "../ui/DefaultButton";

const EmployeeWidget = (props) => {
  const buttonClickTest = () => {
    console.log("Button Click");
  };

  return (
    <section className={styles["employee-widget"]}>
      <div className={styles["employee-widget__img-section"]}>
        <img
          src="https://nutristyle.com/wp-content/uploads/2020/06/bio-photo-placeholder.png"
          alt="Employee Portrait"
        />
      </div>
      <div className={styles["employee-widget__info-section"]}>
        <ul className={styles["employee-widget__info-section__list"]}>
          <li>
            <strong>Name</strong>: Edit Gedeon
          </li>
          <li>
            <strong>Position</strong>: Research Assistant
          </li>
          <li>
            <strong>Department</strong>: Psychology
          </li>
        </ul>
      </div>
      <div className={styles["employee-widget__btn-section"]}>
        <Link to="/employee-id">
          <DefaultButton
            btnAction={buttonClickTest}
            btnLabel="View Entry"
            btnColor="default-btn--green"
          />
        </Link>
        <Link to="/employee-id?edit">
          <DefaultButton btnAction={buttonClickTest} btnLabel="Edit Entry" />
        </Link>
        <DefaultButton
          btnAction={buttonClickTest}
          btnLabel="Delete Entry"
          btnColor="default-btn--red"
        />
      </div>
    </section>
  );
};

export default EmployeeWidget;

// Name: Joe Bloggs
// Position: Software Engineer
// Department: Digital
// Line Manager: Jane Doe
// Salary (per annum): 55,000
// Join Date: 23/07/2020
// Telephone: 0141 123 456
// Email: joebloggs@hotmail.co.uk
// Street: 52 Navy Street
// City: Glasgow
// Postcode: G21 3HS
// County: Lanarkshire
// Country: United Kingdom
// National Insurance No: HW12345678
