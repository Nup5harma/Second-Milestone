import React, { useState } from "react";

import AddExpenses from "./Components/ExpenseManager/AddExpenses";
import ExpensesList from "./Components/ExpenseManager/ExpensesList";

function App() {
  const [expenseList, setExpensesList] = useState([]);

  const onAddExpenseHandler = (expenseName, expenseAmount, expenseDate) => {
    setExpensesList((prevState) => {
      return [
        ...prevState,
        {
          name: expenseName,
          amount: expenseAmount,
          date: expenseDate,
          id: Math.random,
        },
      ];
    });
  };
  return (
    <div>
      <AddExpenses onAddExpenses={onAddExpenseHandler} />
      {ExpensesList.length > 0 && <ExpensesList list={expenseList} />}
    </div>
  );
}

export default App;
