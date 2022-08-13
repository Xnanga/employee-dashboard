import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import departmentsData from '../../../data/departments-data';
import checkForNullishValues from '../../../utils/check-for-nullish-values';
import checkImageFilePathIsInvalid from '../../../utils/check-image-file-path-is-valid';
import DefaultButton from '../../ui/DefaultButton';

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 35rem;

  & > input {
    margin-bottom: 1.5rem;
  }

  & > button {
    margin-top: auto;
  }
`;

const EmployeeEntryForm = () => {
  const [profileImageFile, setProfileImageFile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('IT');
  const [formSubmitError, setFormSubmitError] = useState(false);
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const [hasExistingData, setHasExistingData] = useState(false);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  const employeeId = window.location.href.split('/').at(-1);

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
      setFormSubmitSuccess(true);
      return responseData;
    } catch (err) {
      console.error(err);
      setFormSubmitSuccess(false);
      return err;
    }
  };

  const putFormData = async (url = '', data = { noData: true }) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // prettier-ignore
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setFormSubmitSuccess(true);
      return responseData;
    } catch (err) {
      console.error(err);
      setFormSubmitSuccess(false);
      return err;
    }
  };

  const employeeEntryFormSubmit = async (e) => {
    e.preventDefault();

    const allFormValues = [firstName, lastName, position, department];

    const nullishValuesCheck = checkForNullishValues(allFormValues);

    let fileSubmissionInvalidCheck;
    if (profileImageFile) {
      fileSubmissionInvalidCheck =
        checkImageFilePathIsInvalid(profileImageFile);
    } else {
      fileSubmissionInvalidCheck = false;
    }

    if (nullishValuesCheck || fileSubmissionInvalidCheck) {
      setFormSubmitError(true);
      setFormSubmitSuccess(false);
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

    if (hasExistingData) {
      putFormData(
        `http://localhost:3001/api/edit-employee&id=${employeeId}`,
        newEmployeeData
      );
    } else {
      postFormData(
        `http://localhost:3001/api/create-employee`,
        newEmployeeData
      );
    }
  };

  useEffect(() => {
    const getSpecificEmployeeData = async () => {
      setDataIsLoading(true);
      if (employeeId === 'add-employee') {
        setDataIsLoading(false);
        return;
      }
      const response = await fetch(
        `http://localhost:3001/api/get-employee&id=${employeeId}`
      );
      const responseData = await response.json();
      if (responseData.data?.length === 1) {
        const employeeData = responseData.data[0];
        setHasExistingData(true);
        setFirstName(employeeData.firstName);
        setLastName(employeeData.lastName);
        setPosition(employeeData.position);
        setDepartment(employeeData.department);
      } else {
        setHasExistingData(false);
      }
    };

    getSpecificEmployeeData()
      .catch(console.error)
      .finally(setDataIsLoading(false));
  }, []);

  useEffect(() => {
    if (!formSubmitSuccess) return;
    const delayedRedirectTimeout = setTimeout(() => {
      window.location = '/';
    }, 3000);

    return () => {
      clearTimeout(delayedRedirectTimeout);
    };
  }, [formSubmitSuccess]);

  const formFields = (
    <>
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
        {departmentsData.map((department) => {
          return (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          );
        })}
      </select>
    </>
  );

  const submitButtons = (
    <>
      {!hasExistingData && (
        <DefaultButton btnColor="green" btnLabel="Add Entry" />
      )}
      {hasExistingData && (
        <DefaultButton btnColor="blue" btnLabel="Update Entry" />
      )}
    </>
  );

  const submitMessages = (
    <>
      {formSubmitError && (
        <p id="form-submit-error-msg">
          Looks like something went wrong... Please try again
        </p>
      )}
      {formSubmitSuccess && (
        <p id="form-submit-success-msg">
          Your details have been saved! Redirecting to all entries...
        </p>
      )}
    </>
  );

  return (
    <>
      {dataIsLoading ? (
        <p>Employee profile loading...</p>
      ) : (
        <EntryForm onSubmit={employeeEntryFormSubmit}>
          {formFields}
          {!formSubmitSuccess && submitButtons}
          {submitMessages}
        </EntryForm>
      )}
    </>
  );
};

export default EmployeeEntryForm;
