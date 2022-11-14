// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {
    click: 'Subscribe',
  }

  change = () => {
    this.setState(PrevState =>
      PrevState.click === 'Subscribe'
        ? {click: 'Subscribed'}
        : {click: 'Subscribe'},
    )
  }

  render() {
    const {click} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div>
          <button className="button" type="button" onClick={this.change}>
            {click}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
