import ExpenceItem from "./components/ExpenceItem";

function App() {
  const expenses = [
    {title: 'Kanken', amount: 352, date: new Date(2022, 7, 8)},
    {title: 'Pizza', amount: 30, date: new Date(2022, 7, 7)},
    {title: 'Zoo', amount: 32, date: new Date(2022, 7, 7)},
    {title: 'Kawa', amount: 14, date: new Date(2022, 7, 7)}
  ]
    
  
  return (
    <div>
      <h2>Expense Item!!</h2>
      <ExpenceItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenceItem>
      <ExpenceItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenceItem>
      <ExpenceItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenceItem>
      <ExpenceItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenceItem>
    </div>
  );
}

export default App;
