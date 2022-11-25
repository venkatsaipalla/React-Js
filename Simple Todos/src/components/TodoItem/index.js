// Write your code here
import './index.css'

const TodoItem = props => {
  const {onDelete, itemDetails} = props
  const {id, title} = itemDetails
  console.log(itemDetails)
  const onDel = () => {
    onDelete(id)
  }

  return (
    <>
      <li className="listItem">
        <p className="info">{title}</p>
        <button onClick={onDel} type="button" className="button">
          Delete
        </button>
      </li>
    </>
  )
}

export default TodoItem
