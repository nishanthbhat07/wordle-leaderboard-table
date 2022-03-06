import React from "react";
import ReactTable from "react-table";
import "./styles.css";
const LeaderBoard = ({ data, columns }) => {
  return (
    <ReactTable
      data={data}
      columns={columns}
      loading={data === [] ? true : false}
    />
  );
};
export default LeaderBoard;
