// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    text: 'Light Mode',
    css: 'night',
  }

  change = () => {
    this.setState(PrevState =>
      PrevState.css === 'Day'
        ? {css: 'night', text: 'Light Mode'}
        : {css: 'Day', text: 'Dark Mode'},
    )
  }

  render() {
    const {text, css} = this.state
    return (
      <div className="bg-container">
        <div className={`${css} box`}>
          <h1>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.change}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
