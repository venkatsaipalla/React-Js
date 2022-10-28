import { Component } from "react"
import './App.css'

class App extends Component {
  state = { isLoggedIn: true }

   renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
     <div className="container">
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
