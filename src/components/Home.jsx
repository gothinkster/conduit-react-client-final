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

      <div className="container page">
        <div className="row">

          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Your Feed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Global Feed</a>
                </li>
              </ul>
            </div>

            <Feed />

          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="#" className="label label-pill label-default">programming</a>
                <a href="#" className="label label-pill label-default">javascript</a>
                <a href="#" className="label label-pill label-default">angularjs</a>
                <a href="#" className="label label-pill label-default">react</a>
                <a href="#" className="label label-pill label-default">mean</a>
                <a href="#" className="label label-pill label-default">node</a>
                <a href="#" className="label label-pill label-default">rails</a>
              </div>
            </div>
          </div>

        </div>
      </div>
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
