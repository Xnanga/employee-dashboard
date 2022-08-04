import MainTopBar from './components/ui/MainTopBar';
import EmployeeList from './components/employee-list/EmployeeList';

const App = () => {
  return (
    <div className="App">
      <MainTopBar
        title="Employee Entries"
        hyperlink="/add-employee"
        btnColor="default-btn--green"
        btnLabel="+ Add Entry"
      />
      <EmployeeList />
    </div>
  );
};

export default App;
