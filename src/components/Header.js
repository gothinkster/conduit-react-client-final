import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { routeActions } from 'redux-simple-router'
import { AppBar, LeftNav, IconButton, MenuItem } from 'material-ui'
import { logout } from '../actions/auth'

const Header = ({ open, push, loggedIn, logout }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
          {loggedIn ? (
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className="nav-link" to="/new-post">
                  <i className="ion-compose"></i>&nbsp;New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={logout} href="#">
                  Log Out
                </a>
              </li>
          </ul>
          ) : (
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              </li>
            </ul>
          )}
      </div>
    </nav>
  )
}

export default connect(
  (state) => ({
    loggedIn: state.auth.loggedIn
  }),
  {
    logout
  }
)(Header)
