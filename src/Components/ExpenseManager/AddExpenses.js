import { useState } from "react";
import Card from "../UI/Card";
import Button from "./Button";
import "./form.css";
const AddExpenses = (props) => {
  const [enteredExpenseName, setEnteredExpenseName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const addDataHandler = (event) => {
    event.preventDefault();

    if (
      enteredExpenseName.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      alert("Please enter a valid input!!");
    } else if (!Number.isNaN(+enteredAmount) && +enteredAmount < 0) {
      alert("Please enter a  valid amount..!");
    } else {
      props.onAddExpenses(enteredExpenseName, enteredAmount, enteredDate);
      setEnteredExpenseName("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  const expenseChangeHandler = (event) => {
    setEnteredExpenseName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addDataHandler} className="frm">
        <label htmlFor="ExpenseName" className="lab">
          ExpenseName
        </label>
        <input
          id="ExpenseName"
          type="text"
          onChange={expenseChangeHandler}
          value={enteredExpenseName}
        ></input>

        <label htmlFor="amount" className="lab">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          onChange={amountChangeHandler}
          value={enteredAmount}
        ></input>

        <label htmlFor="date" className="lab">
          Date
        </label>
        <input
          id="date"
          type="date"
          min="2000-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        ></input>

        <Button type="Submit" className="btn">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default AddExpenses;
