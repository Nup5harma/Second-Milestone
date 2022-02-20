import React from "react";

import Card from "../UI/Card";

const ExpensesList = (props) => {
  return (
    <Card>
      <ul>
        {props.list.map((expense) => (
          <li key={expense.id}>
            Expense name:{expense.name}, Amount:{expense.amount}, Date:
            {expense.date}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;
