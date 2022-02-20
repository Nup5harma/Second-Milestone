import { getQueriesForElement } from "@testing-library/react";
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
      alert("Entered data is not valid !!");
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

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
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

        <label className="lab">Search</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </form>
    </Card>
  );
};

export default AddExpenses;
