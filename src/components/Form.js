import React, { useState } from "react";
import Button from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ onSearchClick }) => {
  const [searchParams, setSearchParams] = useState({
    status: "",
    typename: "",
    date: null,
  });

  const changeHandler = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    console.log(searchParams);
    onSearchClick(searchParams);
  };

  return (
    <div className=" mx-auto bg-indigo-100 py-3 px-4 rounded mt-[-32px] z-40 relative shadow-xl max-w-3xl">
      <form
        className="form-section flex items-center justify-center flex-col md:flex-row"
        onSubmit={submitHandler}
      >
        <select
          className="border h-10 px-3 rounded mr-1 focus:outline-none"
          onChange={changeHandler}
          value={searchParams.status}
          name="status"
        >
          <option selected>Choose Status</option>
          <option value="active">Active</option>
          <option value="inactive">In-Active</option>
        </select>
        <DatePicker
          className="border h-10 px-3 rounded mr-1 focus:outline-none max-w-sm"
          selected={searchParams.date}
          onChange={(date) =>
            changeHandler({
              target: {
                name: "date",
                value: date,
              },
            })
          }
        />
        <input
          type="text"
          className="border h-10 px-3 rounded mr-1 focus:outline-none"
          value={searchParams.typename}
          name="typename"
          placeholder="Type"
          onChange={changeHandler}
        />
        <Button className="m-0">Search Capsule</Button>
      </form>
    </div>
  );
};

export default Form;
