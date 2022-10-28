import { Component } from "react"
import './App.css'

class App extends Component {
  state = { isLoggedIn: true }

  render() {
    const { isLoggedIn } = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }
    return (
      <div className="container">
        <h1>React JS</h1>
        {authButton}
      </div>
    )
 }
}

export default App
