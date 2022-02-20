import React from "react";

import Card from "../UI/Card";

const ExpensesList = (props) => {
  return (
    <Card>
        <ul>
          {props.list.map((expense) => (
            <li key={expense.id}>
              {expense.name} {expense.amount} {expense.date}
            </li>
          ))}
        </ul>
    </Card>
  );
};

export default ExpensesList;