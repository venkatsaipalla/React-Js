// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  generate = () => {
    const x = Math.floor(Math.random() * 101)
    this.setState(() => ({count: x}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="big">
        <div className="bg-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.generate}>
            Generate
          </button>
          <h1 className="counter-display">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
