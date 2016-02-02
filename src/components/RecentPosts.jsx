import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveAll } from '../actions/feed'
import PostList from './PostList.jsx'

class RecentPosts extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }
  render(){
    return (
      <PostList posts={this.props.posts} />
    )
  }
}

export default connect(
  (state)=>({
    posts: state.feedPosts
  }),
  {
    fetchPosts: retrieveAll
  }
)(RecentPosts)
