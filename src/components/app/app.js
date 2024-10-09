import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

function App() {
  const data = [
    { name: "Adam Braun", salary: 2400, id: 1 },
    { name: "Alex Dobrý", salary: 1800, id: 2 },
    { name: "Martina Suchanová", salary: 3600, id: 3 },
    { name: "Kristina Kousalová", salary: 2800, id: 4 },
  ];
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}
export default App;
