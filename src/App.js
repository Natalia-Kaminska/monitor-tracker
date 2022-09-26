import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {title: 'Kanken', amount: 352, date: new Date(2022, 7, 8)},
    {title: 'Pizza', amount: 30, date: new Date(2022, 7, 7)},
    {title: 'Zoo', amount: 32, date: new Date(2022, 7, 7)},
    {title: 'Kawa', amount: 14, date: new Date(2022, 7, 7)}
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
