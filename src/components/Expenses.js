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
      {
        props.expenses.map( item => (
        <ExpenceItem 
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
        ))
      }
    </Card>
  )
};

export default Expenses;