import ExpenceItem from "./ExpenceItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from './Card'
import './Expenses.css';
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onChangeYearHandler = (year) => {
    console.log('expense', year);
    setFilteredYear(year)
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={onChangeYearHandler} />
      <ExpenceItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenceItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenceItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenceItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  )
};

export default Expenses;