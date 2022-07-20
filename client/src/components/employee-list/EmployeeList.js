import { useEffect, useState } from 'react';
import styles from './EmployeeList.module.css';

import EmployeeWidget from './EmployeeWidget';

const EmployeeList = () => {
  const [allEmployeeData, setAllEmployeeData] = useState(null);

  useEffect(() => {
    const getAllEmployeeData = async () => {
      const response = await fetch(
        'http://localhost:3001/api/get-all-employees'
      );
      const responseData = await response.json();
      setAllEmployeeData(responseData.data);
    };

    getAllEmployeeData().catch(console.error);
  }, []);

  return (
    <div className={styles['employee-list']}>
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
            />
          );
        })}
      {!allEmployeeData && <p>No Employee Data Available</p>}
    </div>
  );
};

export default EmployeeList;
