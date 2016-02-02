require('normalize.css')
// require('styles/style.scss')
require('bootstrap-loader')

import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistory, routeReducer } from 'redux-simple-router'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { Layout, Home, Profile, EditProfile, EditPost, Post, NewPost, Tag, Login, Register } from './'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(hashHistory)
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer)

const requireAuth = (nextState, replace) => {
  if(!store.getState().auth.loggedIn){
    replace('/login')
  }
}

const requireNoAuth = (nextState, replace) => {
  if(store.getState().auth.loggedIn){
    replace('/')
  }
}

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="profile" component={EditProfile} onEnter={requireAuth} />
        <Route path="login" component={Login} onEnter={requireNoAuth} />
        <Route path="register" component={Register} onEnter={requireNoAuth} />
        <Route path="new-post" component={NewPost} />
        <Route path="tag/:tagName" component={Tag} />
        <Route path="posts/:slug" component={Post} />
        <Route path="posts/:slug/edit" component={EditPost} />
        <Route path=":username" component={Profile} />
      </Route>
    </Router>
  </Provider>
)

export default App
