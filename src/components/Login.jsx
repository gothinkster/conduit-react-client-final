import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField } from 'material-ui'
import { login } from '../actions/auth'

class Login extends Component {
  onSubmit(){
    this.props.login({
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    })
  }

  render(){
    return (
      <div className="login">
        <div className="login-username">
          <TextField ref="email" hintText="Email" />
        </div>
        <div className="login-password">
          <TextField ref="password" hintText="Password" type="password" />
        </div>
        <div className="login-submit">
          <RaisedButton
            primary={true}
            label="Login"
            onTouchTap={this.onSubmit.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, {
  login
})(Login)
