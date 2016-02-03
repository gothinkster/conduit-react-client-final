import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {user: {}}
  }

  onSubmit(){
    // this.props.login({
    //   email: this.refs.email.getValue(),
    //   password: this.refs.password.getValue()
    // })
    this.props.login(this.state.user)
  }

  handleChange(field, e){
    let change = {}
    change[field] = e.target.value

    this.setState({user: Object.assign({}, this.state.user, change)})
  }

  render(){
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 col-md-offset-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>


              <form onSubmit={this.onSubmit.bind(this)}>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                  Sign In
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  login
})(Login)
