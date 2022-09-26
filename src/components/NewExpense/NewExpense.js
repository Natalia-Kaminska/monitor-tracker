import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const onSubmitExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;