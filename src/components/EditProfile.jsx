import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update } from '../actions/profile'

class EditProfile extends Component {
  constructor(props){
    super(props)

    this.state = {user: {}}
  }

  handleChange(field, e){
    let change = {}
    change[field] = e.target.value

    this.setState({user: Object.assign({}, this.state.user, change)})
  }

  onSubmit(){
    this.props.update(this.state.user)
  }

  render(){
    const { user } = this.props

    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 col-md-offset-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>

              <form onSubmit={this.onSubmit.bind(this)}>
                <fieldset className="form-group">
                  <input className="form-control" type="text" placeholder="URL of profile picture" onChange={this.handleChange.bind(this, 'image')} defaultValue={user.image} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Username" onChange={this.handleChange.bind(this, 'username')} defaultValue={user.username} />
                </fieldset>
                <fieldset className="form-group">
                  <textarea className="form-control form-control-lg" rows="8" placeholder="Short bio about you" onChange={this.handleChange.bind(this, 'bio')} defaultValue={user.bio}>
                  </textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} defaultValue={user.email} />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                  Update Profile
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state)=>({
    user: state.auth.user
  }),{
    update
  }
)(EditProfile)
