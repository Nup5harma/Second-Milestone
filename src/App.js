import React, { useState } from "react";

import AddUsers from "./Components/ExpenseManager/AddExpenses";
import ExpensesList from "./Components/ExpenseManager/ExpensesList";

function App() {
  const [expenseList, setExpenseList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setExpenseList((prevState) => {
      return [...prevState, { name: userName, age: userAge, id: Math.random }];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={onAddUserHandler} />
      {expenseList.length > 0 && <ExpensesList list={expenseList} />}
    </div>
  );
}
export default App;
