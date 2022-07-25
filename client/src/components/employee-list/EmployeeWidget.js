import { Link } from 'react-router-dom';

import styles from './EmployeeWidget.module.css';

import DefaultButton from '../ui/DefaultButton';

const EmployeeWidget = (props) => {
  const sendEmployeeDeleteRequest = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/delete-employee&id=${employeeId}`,
        {
          method: 'DELETE',
          body: { employeeId: employeeId },
        }
      );
      const responseData = await response.json();
      props.employeeDataChangeHandler();
      return responseData;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  const buttonClickTest = () => {
    console.log('Button Clicked');
  };

  return (
    <section id={props.id} className={styles['employee-widget']}>
      <div className={styles['employee-widget__img-section']}>
        <img
          src="https://nutristyle.com/wp-content/uploads/2020/06/bio-photo-placeholder.png"
          alt="Employee Portrait"
        />
      </div>
      <div className={styles['employee-widget__info-section']}>
        <ul className={styles['employee-widget__info-section__list']}>
          <li>
            <strong>Name: </strong>
            {`${props.firstName} ${props.lastName}`}
          </li>
          <li>
            <strong>Position: </strong>
            {props.position}
          </li>
          <li>
            <strong>Department: </strong>
            {props.department}
          </li>
        </ul>
      </div>
      <div className={styles['employee-widget__btn-section']}>
        <Link to="/employee-id?edit">
          <DefaultButton btnAction={buttonClickTest} btnLabel="Edit Entry" />
        </Link>
        <DefaultButton
          btnAction={() => sendEmployeeDeleteRequest(props.id)}
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
