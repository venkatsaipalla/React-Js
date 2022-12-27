// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    tittleInput: '',
    dateInput: '',
    appointmentsList: [],
    displayOnlyStarred: false,
  }

  toggleIsStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStared: !eachItem.isStared}
        }
        return eachItem
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {tittleInput, dateInput} = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: v4(),
      tittle: tittleInput,
      appointmentDate: formattedDate,
      isStared: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      tittleInput: '',
      dateInput: '',
    }))
  }

  renderAppointmentList = () => {
    const {appointmentsList, displayOnlyStarred} = this.state
    if (displayOnlyStarred === true) {
      const starredAppointmentsList = appointmentsList.filter(
        eachItem => eachItem.isStared === true,
      )
      return starredAppointmentsList.map(eachItem => (
        <AppointmentItem
          key={eachItem.id}
          appointmentDetails={eachItem}
          toggleIsStar={this.toggleIsStar}
        />
      ))
    }
    return appointmentsList.map(eachItem => (
      <AppointmentItem
        key={eachItem.id}
        appointmentDetails={eachItem}
        toggleIsStar={this.toggleIsStar}
      />
    ))
  }

  changeTittleInput = event => {
    this.setState({tittleInput: event.target.value})
  }

  changeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleDisplayStarred = () => {
    const {displayOnlyStarred} = this.state
    this.setState({displayOnlyStarred: !displayOnlyStarred})
  }

  render() {
    const {tittleInput, dateInput, displayOnlyStarred} = this.state
    const buttonClassName = displayOnlyStarred
      ? 'filter-filled'
      : 'filter-empty'
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="add-appointment-container">
              <form className="form" onSubmit={this.onAddAppointment}>
                <h1 className="add-appointment-heading">Add Appointment</h1>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="input"
                  placeholder="Title"
                  value={tittleInput}
                  onChange={this.changeTittleInput}
                />
                <label htmlFor="date" className="label">
                  DATE:
                </label>
                <input
                  type="date"
                  id="date"
                  className="input"
                  value={dateInput}
                  onChange={this.changeDateInput}
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-img"
              />
            </div>
            <hr className="hr" />
            <div className="header-with-filter-container">
              <h1 className="appointments-heading">Appointments</h1>
              <button
                className={`filter-style ${buttonClassName}`}
                type="button"
                onClick={this.toggleDisplayStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">
              {this.renderAppointmentList()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
