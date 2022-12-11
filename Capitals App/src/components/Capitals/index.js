import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  change = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const selectedCountry = countryAndCapitalsList.filter(
      item => item.id === activeId,
    )
    const {country} = selectedCountry[0]
    return (
      <div className="bg">
        <div className="small_div">
          <h1>Countries And Capitals</h1>
          <select id="country" onChange={this.change} className="inp">
            {countryAndCapitalsList.map(each => (
              <option value={each.id}>{each.capitalDisplayText}</option>
            ))}
          </select>
          <label htmlFor="country"> is capital of which country</label>
          <br />
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
