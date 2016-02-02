import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField } from 'material-ui'
import { update } from '../actions/profile'

class EditProfile extends Component {
  onSubmit(){
    this.props.update({
      username: this.refs.username.getValue(),
      email: this.refs.email.getValue(),
      image: this.refs.image.getValue(),
      bio: this.refs.bio.getValue()
    })
  }

  render(){
    const { user } = this.props

    return (
      <div className="profile-form">
        <div className="profile-form-username">
          <TextField
            ref="username"
            hintText="Username"
            defaultValue={user.username}
            floatingLabelText="Username"
          />
        </div>
        <div className="profile-form-email">
          <TextField
            ref="email"
            hintText="Email"
            defaultValue={user.email}
            floatingLabelText="Email"
          />
        </div>
        <div className="profile-form-image">
          <TextField
            ref="image"
            hintText="Image"
            defaultValue={user.image}
            floatingLabelText="Image"
          />
        </div>
        <div className="profile-form-bio">
          <TextField
            ref="bio"
            hintText="Bio"
            defaultValue={user.bio}
            floatingLabelText="Bio"
            multiLine={true}
          />
        </div>
        <RaisedButton
          label="Update"
          primary={true}
          onTouchTap={this.onSubmit.bind(this)}
        />
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
