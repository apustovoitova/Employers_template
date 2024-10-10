import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Adam Braun", salary: 2400, id: 1 },
        { name: "Alex Dobrý", salary: 1800, id: 2 },
        { name: "Martina Suchanová", salary: 3600, id: 3 },
        { name: "Kristina Kousalová", salary: 2800, id: 4 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}
export default App;
