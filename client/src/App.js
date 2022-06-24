// import JSONResponseTest from "./components/JSONResponseTest";
import MainBodyLayout from "./components/layout/MainBodyLayout";
import EmployeeList from "./components/employee list/EmployeeList";

const App = () => {
  return (
    <div className="App">
      <MainBodyLayout>
        <h1>Current Employees</h1>
        <EmployeeList />
      </MainBodyLayout>
    </div>
  );
};

export default App;
