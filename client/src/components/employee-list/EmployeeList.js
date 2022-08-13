import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import EmployeeWidget from './EmployeeWidget';

const EmployeeListContainer = styled.div`
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const EmployeeList = () => {
  const [allEmployeeData, setAllEmployeeData] = useState(null);
  const [employeeDataChanged, setEmployeeDataChanged] = useState(false);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  const employeeDataChangeHandler = () => {
    setEmployeeDataChanged((prevState) => !prevState);
  };

  useEffect(() => {
    setDataIsLoading(true);
    const getAllEmployeeData = async () => {
      const response = await fetch(
        'http://localhost:3001/api/get-all-employees'
      );
      const responseData = await response.json();
      setAllEmployeeData(responseData.data);
    };

    getAllEmployeeData().catch(console.error).finally(setDataIsLoading(false));
  }, [employeeDataChanged]);

  return (
    <EmployeeListContainer>
      {allEmployeeData &&
        allEmployeeData?.map((employee) => {
          return (
            <EmployeeWidget
              key={employee._id}
              id={employee._id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              position={employee.position}
              department={employee.department}
              employeeDataChangeHandler={employeeDataChangeHandler}
            />
          );
        })}
      {!allEmployeeData && !dataIsLoading && <p>No Employee Data Available</p>}
      {dataIsLoading && <p>Loading Employee Data...</p>}
    </EmployeeListContainer>
  );
};

export default EmployeeList;
