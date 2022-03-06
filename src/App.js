import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import LeaderBoard from "./components/Table/LeaderBoard";

const URL = "https://61e4f7db595afe00176e5239.mockapi.io/leaderboard";
const App = () => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const generateCols = (keys) => {
    const cols = [];
    const requiedColumns = ["name", "no_of_tries", "time_taken"];
    const filteredKeys = keys.filter((el) => requiedColumns.includes(el));
    filteredKeys.forEach((i) => {
      if (i === "no_of_tries" || i === "time_taken") {
        var options = {
          Header: i.toUpperCase(),
          accessor: i,
          Cell: (props) => <span className="number">{props.value}</span>,
          sortable: true,
        };
      } else {
        var options = {
          Header: i.toUpperCase(),
          accessor: i,
          Cell: (props) => <span className="number">{props.value}</span>,
        };
      }

      cols.push(options);
    });
    return cols;
  };
  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(URL);
      const { data } = resp;
      const keys = Object.keys(data[0]);
      const cols = generateCols(keys);
      setColumns(cols);
      setTableData(resp?.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <LeaderBoard data={tableData} columns={columns} />
    </div>
  );
};

export default App;
