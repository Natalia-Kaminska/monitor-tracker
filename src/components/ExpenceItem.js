import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenceItem.css';

function ExpenceItem(props) {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <p className='expense-item__price'>{props.amount}PLN</p>
        </div>
      </Card>
    </li>
  )
}

export default ExpenceItem;