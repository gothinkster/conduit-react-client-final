import React, { Component } from 'react'
import { Link } from 'react-router'
import { routeActions } from 'redux-simple-router'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'
import Feed from './Feed.jsx'
import PostList from './PostList.jsx'

const Home = ({ dispatch, posts, push, loggedIn }) => {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <p>Welcome Home!</p>
      <p>You are {loggedIn ? '' : 'not'} logged in.</p>

      <Feed />
    </div>
  );
}

export default connect(
  (state) => ({
    posts: state.posts,
    loggedIn: state.auth.loggedIn
  }),
  { push: routeActions.push }
)(Home)
