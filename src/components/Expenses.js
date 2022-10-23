import ExpensesFilter from "./ExpensesFilter";
import Card from './Card'
import './Expenses.css';
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onChangeYearHandler = (year) => {
    setFilteredYear(year)
  };

  const filteredExpenses =
     props.expenses.filter( item => item.date.getFullYear().toString() === filteredYear);
  ;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear} 
        onChangeYear={onChangeYearHandler} 
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>

    </Card>
  );
};

export default Expenses;