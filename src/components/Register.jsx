import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { register } from '../actions/auth'

class Register extends Component {
  constructor(props){
    super(props)

    this.state = {user: {}}
  }

  onSubmit(){
    this.props.register(this.state.user)
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
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>


              <form onSubmit={this.onSubmit.bind(this)}>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Username" onChange={this.handleChange.bind(this, 'username')} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                  Sign up
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
  register
})(Register)
