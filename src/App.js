import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {title: 'Kawa', amount: 14, date: new Date(2022, 7, 7), id: Math.random().toString()},
    {title: 'Komputer', amount: 5500, date: new Date(2022, 3, 21), id: Math.random().toString()},
    {title: 'auto', amount: 13300, date: new Date(2021, 4, 6), id: Math.random().toString()},
    {title: 'plecak', amount: 308.89, date: new Date(2020, 11, 16), id: Math.random().toString()}
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      expense,
      ...prevExpenses
    ]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
