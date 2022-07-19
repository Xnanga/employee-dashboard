import { useState } from 'react';

import styles from './EmployeeEntryForm.module.css';

import DefaultButton from '../ui/DefaultButton';

const checkForNullishValues = (arr) => {
  const trimmedValues = arr.map((val) => val.trim());
  const anyValuesFalsy = trimmedValues.some((val) => !val);
  const anyValuesLessThanZeroLength = trimmedValues.some(
    (val) => val.length < 1
  );
  return anyValuesFalsy || anyValuesLessThanZeroLength;
};

const checkFileSubmitIsInvalid = (filePath) => {
  const fileExtensionStartIndex = filePath.indexOf('.');
  const fileExtension = filePath.slice(fileExtensionStartIndex + 1);

  if (
    fileExtension === 'png' ||
    fileExtension === 'jpg' ||
    fileExtension === 'jpeg'
  ) {
    return false;
  }

  return true;
};

const postFormData = async (url = '', data = { noData: true }) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // prettier-ignore
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error(err);
  }
};

const EmployeeEntryForm = () => {
  const [profileImageFile, setProfileImageFile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('it');
  const [formSubmitError, setFormSubmitError] = useState(false);

  const inputChangeHandler = (e) => {
    const inputElementId = e.target.id;
    const inputElementValue = e.target.value;

    if (inputElementId === 'profile-image')
      setProfileImageFile(inputElementValue);
    if (inputElementId === 'fname') setFirstName(inputElementValue);
    if (inputElementId === 'lname') setLastName(inputElementValue);
    if (inputElementId === 'position') setPosition(inputElementValue);
    if (inputElementId === 'department') setDepartment(inputElementValue);
  };

  const employeeEntryFormSubmit = (e) => {
    e.preventDefault();

    const allFormValues = [firstName, lastName, position, department];

    const nullishValuesCheck = checkForNullishValues(allFormValues);

    let fileSubmissionInvalidCheck;
    if (profileImageFile) {
      fileSubmissionInvalidCheck = checkFileSubmitIsInvalid(profileImageFile);
    } else {
      fileSubmissionInvalidCheck = false;
    }

    if (nullishValuesCheck || fileSubmissionInvalidCheck) {
      setFormSubmitError(true);
      setProfileImageFile('');
      return;
    }

    setFormSubmitError(false);

    const newEmployeeData = {
      profileImageFilename: profileImageFile,
      firstName: firstName,
      lastName: lastName,
      position: position,
      department: department,
    };

    postFormData('http://localhost:3001/api/create-employee', newEmployeeData);
  };

  return (
    <form
      className={styles['employee-entry-form']}
      onSubmit={employeeEntryFormSubmit}
    >
      <label htmlFor="profile-image">Profile Photo:</label>
      <input
        type="file"
        id="profile-image"
        name="profile-image"
        value={profileImageFile}
        onChange={inputChangeHandler}
      ></input>
      <label htmlFor="fname">First Name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={firstName}
        onChange={inputChangeHandler}
      />
      <label htmlFor="lname">Last Name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={lastName}
        onChange={inputChangeHandler}
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        value={position}
        onChange={inputChangeHandler}
      />
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        value={department}
        onChange={inputChangeHandler}
      >
        <option value="it">IT</option>
        <option value="medical">Medical</option>
        <option value="operations">Operations</option>
        <option value="customer service">Customer Service</option>
      </select>
      <DefaultButton btnColor="default-btn--green" btnLabel="Add Entry" />
      {formSubmitError && (
        <p id="form-submit-error-msg">Looks like something went wrong...</p>
      )}
    </form>
  );
};

export default EmployeeEntryForm;
