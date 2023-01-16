import axios from "axios";

const GetBrowseData = async (pageNo, pageSize, filters) => {
  axios
    .get("https://api.spacexdata.com/v3/capsules")
    .then((response) => {
      if (response.status === 200) {
        const data =
          response.length > 0
            ? response.slice((pageNo - 1) * pageSize, pageNo * pageSize)
            : [];
        return { data, totalRows: response.length };
      } else {
      }
    })
    .catch((err) => {
      return err;
    });
};

const getRowData = (rowID) => {};

export default GetBrowseData;
