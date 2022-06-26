import MainTopBar from "../components/ui/MainTopBar";
import EmployeeEntryForm from "../components/forms/EmployeeEntryForm";

const AddEmployee = () => {
  const btnTestAction = () => {
    console.log("Button Press");
  };

  return (
    <>
      <MainTopBar
        title="Add Employee Entry"
        hyperlink="/"
        btnColor="default-btn--red"
        btnLabel="<< Back to All Entries"
        btnAction={btnTestAction}
      />
      <EmployeeEntryForm />
    </>
  );
};

export default AddEmployee;
