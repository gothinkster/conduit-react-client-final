import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm.jsx'
import { retrieve } from '../actions/posts'

class EditPost extends Component{
  componentWillMount(){
    this.props.retrieve(this.props.params.slug)
  }

  render(){
    const { post } = this.props

    return (
      <div className="EditPost">
        <h1>Edit your post</h1>
        <PostForm action="edit" post={post} />
      </div>
    )
  }
}

export default connect(
  (state, props)=>({
    post: state.posts[props.params.slug],
  }),
  {
    retrieve
  }
)(EditPost)
