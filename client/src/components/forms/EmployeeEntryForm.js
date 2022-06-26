import styles from "./EmployeeEntryForm.module.css";

import DefaultButton from "../ui/DefaultButton";

const EmployeeEntryForm = () => {
  return (
    <form className={styles["employee-entry-form"]}>
      <input type="file" id="profile-image" name="profile-image"></input>
      <label htmlFor="fname">First Name:</label>
      <input type="text" id="fname" name="fname" required />
      <label htmlFor="lname">Last Name:</label>
      <input type="text" id="lname" name="lname" required />
      <label htmlFor="position">Position:</label>
      <input type="text" id="position" name="position" required />
      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        <option value="it">IT</option>
        <option value="medical">Medical</option>
        <option value="operations">Operations</option>
        <option value="customer-service">Customer Service</option>
      </select>
      <DefaultButton btnColor="default-btn--green" btnLabel="Add Entry" />
    </form>
  );
};

export default EmployeeEntryForm;
