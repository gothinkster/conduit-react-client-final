import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { RaisedButton } from 'material-ui'
import { retrieve } from '../actions/profile'
import { retrieveAuthorPosts } from '../actions/posts'
import PostList from './PostList.jsx'

class Profile extends Component {
  componentWillMount(){
    this.props.retrieveProfile(this.props.params.username)
  }

  render(){
    let { profile } = this.props
    return profile && !profile.loading ? (
      <div className="profile-page">

        <div className="user-info">
          <div className="container">
            <div className="row">

              <div className="col-md-10 col-md-offset-1">
                <img src="http://i.imgur.com/Qr71crq.jpg" className="user-img" />
                <h4>{ profile.user.username }</h4>
                <p>
                  { profile.user.bio }
                </p>
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round"></i>
                  &nbsp;
                  Follow {profile.user.username} <span className="counter">(10)</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-10 col-md-offset-1">
              <div className="posts-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">My Posts</a>
                  </li>
                  {
                  // <li className="nav-item">
                  //   <a className="nav-link" href="#">Favorited Posts</a>
                  // </li>
                  }
                </ul>
              </div>

              <PostList posts={profile.posts} />

            </div>

          </div>
        </div>

      </div>
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}

export default connect(
  (state, props) => ({
    profile: state.profiles[props.params.username],
  }), {
    retrieveProfile: retrieve,
  }
)(Profile);


// <div>
//   <p>{this.props.profile.user.username}'s Profile!</p>
//   <RaisedButton label="Follow" primary={true} />
//   <h3>Posts by {this.props.profile.user.username} </h3>
//   <PostList posts={this.props.profile.posts} />
// </div>
