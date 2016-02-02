import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, RaisedButton } from 'material-ui'
import { register } from '../actions/auth'

class Register extends Component {
  onSubmit(){
    this.props.register({
      email: this.refs.email.getValue(),
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    })
  }
  render(){
    return (
      <div className="register">
        <div className="register-email">
          <TextField ref="email" hintText="Email" />
        </div>
        <div className="register-username">
          <TextField ref="username" hintText="Username" />
        </div>
        <div className="register-password">
          <TextField ref="password" hintText="Password" type="password" />
        </div>
        <div className="register-submit">
          <RaisedButton
            primary={true}
            label="Register"
            onTouchTap={this.onSubmit.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default connect(null, {
  register
})(Register)
