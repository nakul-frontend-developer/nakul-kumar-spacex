import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import servies from "../Services";

const DataGrid = () => {
  console.log("Data", servies());

  const [browseData, setBrowseData] = useState({
    data: [],
    pageNo: 1,
    pageSize: 10,
    totalRows: 0,
  });

  const [rowData, setRowData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, pageNo, pageSize, totalRows } = browseData;

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const handlePerRowsChange = (pageSize) => {
    setBrowseData({ ...browseData, pageSize: pageSize });
  };

  const handlePageChange = (page) => {
    setBrowseData({ ...browseData, pageNo: page });
  };

  return (
    <div>
      <DataTable
        title="Capsules"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onRowClicked={(row) => console.log("row click", row)}
      />

      {/* {Modal} */}
      {/* {Bind Row Data} */}
    </div>
  );
};

export default DataGrid;
