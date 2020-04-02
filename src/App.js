import React, { useEffect, useState } from "react";

import "./App.css";
import api from "./utils/api";
import BodyTable from "./Components/tableBody";
import Search from "./Components/search";
const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [direction, setDirection] = useState("des");
  useEffect(() => {
    api
      .getMany(100)
      .then(res => {
        setEmployees(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  const sorter = () => {
    const sortedList = employees.sort((a, b) => {
      const x = a.name.first;
      const z = b.name.first;
      if (direction !== "asc") {
        if (x > z) {
          return 1;
        }
        if (x < z) {
          return -1;
        }
        return 0;
      } else {
        if (x < z) {
          return 1;
        }
        if (x > z) {
          return -1;
        }
        return 0;
      }
    });
    setEmployees(sortedList);
    setDirection(curr => (curr === "asc" ? "des" : "asc"));
  };

  const activeList = employees.filter(employee => {
    return (
      employee.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.name.last.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <>
      <Search term={searchTerm} setter={setSearchTerm} />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col" style={{cursor: "pointer"}} onClick={sorter}>
              Full Name
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          <BodyTable users={activeList} />
        </tbody>
      </table>
    </>
  );
};

export default App;
