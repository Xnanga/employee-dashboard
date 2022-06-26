// import JSONResponseTest from "./components/JSONResponseTest";
import MainTopBar from "./components/ui/MainTopBar";
import EmployeeList from "./components/employee-list/EmployeeList";

const App = () => {
  const btnTestAction = () => {
    console.log("Button Press");
  };

  return (
    <div className="App">
      <MainTopBar
        title="Employee Entries"
        hyperlink="/add-employee"
        btnColor="default-btn--green"
        btnLabel="+ Add Entry"
        btnAction={btnTestAction}
      />
      <EmployeeList />
    </div>
  );
};

export default App;
