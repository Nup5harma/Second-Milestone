import React, { useState } from "react";

import Card from "../UI/Card";
import Filter from "./Filter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log(filteredYear);
  const filteredExpenses = props.items.map((user) => {
    if (user.date.toString().startsWith(filteredYear)) {
      return user;
    }
    return null;
  });
  console.log(filteredExpenses);

  return (
    <div>
      <Card>
        <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </Card>
    </div>
  );
};

export default Expenses;
