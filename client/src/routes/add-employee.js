import MainTopBar from '../components/ui/MainTopBar';
import EmployeeEntryForm from '../components/forms/EmployeeEntryForm/EmployeeEntryForm';

const AddEmployee = () => {
  return (
    <>
      <MainTopBar
        title="Add Employee Entry"
        hyperlink="/"
        btnColor="blue"
        btnLabel="<< Back to All Entries"
      />
      <EmployeeEntryForm />
    </>
  );
};

export default AddEmployee;
