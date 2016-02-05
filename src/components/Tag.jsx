import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrievePosts } from '../actions/tags'
import PostList from './PostList'

class Tag extends Component{
  componentWillMount(){
    this.props.retrievePosts(this.props.params.tagName)
  }

  render(){
    return (
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <p>Posts tagged as {this.props.params.tagName}</p>
          </div>
        </div>


        <div className="container page">
          <div className="row">
            <div className="col-md-12">
              {this.props.posts ?
                <PostList posts={this.props.posts} />
              :
                <p>Loading...</p>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state, props) => ({
  posts: state.tagPosts[props.params.tagName]
}), {
  retrievePosts
})(Tag)
