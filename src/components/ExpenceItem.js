import './ExpenceItem.css';

function ExpenceItem(props) {
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <p className='expense-item__price'>{props.amount}PLN</p>
        </div>
    </div>
  )
}

export default ExpenceItem;