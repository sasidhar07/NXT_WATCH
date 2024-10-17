import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {passStatus: 'password', username: '', password: '', errorMsg: ''}

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  NavToHome = () => {}

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',

      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 0.5})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  ShowPass = () => {
    const {passStatus} = this.state
    if (passStatus === 'password') {
      this.setState({passStatus: 'text'})
    } else {
      this.setState({passStatus: 'password'})
    }
  }

  render() {
    const {passStatus, errorMsg} = this.state
    if (Cookies.get('jwt_token')) {
      return <Redirect to="/" />
    }
    return (
      <div className="LoginContainer">
        <form className="LoginForm" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="LogoImg"
          />
          <label className="usernameAndPass" htmlFor="username">
            USERNAME
          </label>
          <input
            className="UserAndPassInput"
            type="text"
            id="username"
            onChange={this.usernameChange}
            placeholder="Username"
          />
          <label className="usernameAndPass" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="UserAndPassInput"
            type={passStatus}
            onChange={this.passwordChange}
            id="password"
            placeholder="Password"
          />
          <div className="ShowPassCard">
            <input onClick={this.ShowPass} type="checkbox" id="checkBox" />
            <label htmlFor="checkBox">Show Password</label>
          </div>
          <button className="loginButton">Login</button>
          <p>
            username: rahul
            <br />
            password: rahul@2021
          </p>
          {errorMsg.length !== 0 ? <p className="errorPara">{errorMsg}</p> : ''}
        </form>
      </div>
    )
  }
}

export default LoginForm
