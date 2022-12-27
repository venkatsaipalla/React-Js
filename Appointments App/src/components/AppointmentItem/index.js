// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStar} = props
  const {id, tittle, appointmentDate, isStared} = appointmentDetails
  const starUrl = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const onclickEvent = () => {
    toggleIsStar(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{tittle}</p>
        <button type="button" className="star-button" onClick={onclickEvent}>
          <img src={starUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {appointmentDate}</p>
    </li>
  )
}

export default AppointmentItem
