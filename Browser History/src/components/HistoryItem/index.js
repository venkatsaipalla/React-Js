import './index.css'

const HistoryItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="listContainer">
        {' '}
        <div className="infoContainer">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <div>
          <button type="button" className="button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
