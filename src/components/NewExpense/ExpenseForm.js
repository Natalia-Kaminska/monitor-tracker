import './ExpenseForm.css'

import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredData, setEnteredData] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  const [isFormVisible, setIsFormVisible] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return {
      ...prevState,
      enteredTitle: event.target.value
    }})
  }

  const amountChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return {
      ...prevState,
      enteredAmount: event.target.value
    }})
  }

  const dateChangeHandler = (event) => {
    setEnteredData((prevState) => {
      return {
      ...prevState,
      enteredDate: event.target.value
    }})
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredData.enteredTitle,
      amount: +enteredData.enteredAmount,
      date: new Date(enteredData.enteredDate)
    }

    props.onSubmitExpenseData(expenseData);

    setEnteredData({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  }

  const toggleNewExpenceForm = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible(true);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      {isFormVisible && (
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredData.enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enteredData.enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredData.enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      )}
      <div className={isFormVisible ? 'new-expense__actions' : ''}>
        {isFormVisible && (
        <button onClick={toggleNewExpenceForm} type='button'>Cancel</button>
        )}
        <button onClick={toggleNewExpenceForm} type="submit">{isFormVisible ? 'Add Expense' : 'Add New Expense' }</button>
      </div>
    </form>
  )
}

export default ExpenseForm;