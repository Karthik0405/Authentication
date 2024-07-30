// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {username: '', password: '', errorMessage: ''}

  gettingPassword = e => {
    this.setState({
      password: e.target.value,
    })
  }

  gettingUsername = e => {
    this.setState({username: e.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          placeholder="Password"
          onChange={this.gettingPassword}
          value={password}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          placeholder="Username"
          onChange={this.gettingUsername}
          value={username}
        />
      </>
    )
  }

  onSubmitSucess = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      statusCode: data.status_code,
      errorMsg: data.error_msg,
    }
    if (response.ok === true) {
      this.onSubmitSucess()
    } else {
      const {errorMsg} = updatedData
      this.setState({errorMessage: errorMsg})
    }
  }

  render() {
    const {errorMessage} = this.state
    return (
      <div className="website-login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-sm-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-mobile-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-msg">{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginFrom
