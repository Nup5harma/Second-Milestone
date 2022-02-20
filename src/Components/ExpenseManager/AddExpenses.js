import { useState } from "react";
import Card from "../UI/Card";
import Button from "./Button";
import "./form.css";
const AddExpenses = (props) => {
  const [enteredExpenseName, setEnteredExpenseName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [year, setEnteredYear] = useState("");

  const addDataHandler = (event) => {
    event.preventDefault();

    if (
      enteredExpenseName.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      alert("Entered data is not valid !!");
    } else if (!Number.isNaN(+enteredAmount) && +enteredAmount < 0) {
      alert("Please enter a  valid amount..!");
    } else if (enteredDate.substring(0, 4) === year) {
      props.onAddExpenses(enteredExpenseName, enteredAmount, enteredDate);
      setEnteredExpenseName("");
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredYear("");
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

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
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
          onChange={dateChangeHandler}
          value={enteredDate}
        ></input>

        <Button type="Submit" className="btn">
          Submit
        </Button>

        <label htmlFor="year" className="lab">
          Search
        </label>
        <input
          id="year"
          type="text"
          value={year}
          onChange={yearChangeHandler}
        ></input>
      </form>
    </Card>
  );
};

export default AddExpenses;
