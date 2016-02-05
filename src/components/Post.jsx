import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import marked from 'marked'
import { retrieve } from '../actions/posts'
import Comments from './Comments.jsx'
import PostMeta from './PostMeta'

class Post extends Component {
  componentWillMount(){
    this.props.retrieve(this.props.params.slug)
  }
  render(){
    if(this.props.post && !this.props.post.loading){
      const { user, post} = this.props

      return (
        <div className="post-page">
          <div className="banner">
            <div className="container">

              <h1>{ post.title }</h1>

              <PostMeta post={post} />

            </div>
          </div>

          <div className="container page">

            <div className="row post-content">
              <div className="col-md-12" dangerouslySetInnerHTML={{__html: marked(post.body, {sanitize: true})}}>
              </div>
            </div>

            <hr />

            <div className="post-actions">
              <PostMeta post={post} />
            </div>

            <div className="row">

              <div className="col-md-8 col-md-offset-2">

                <Comments comments={[]}/>

              </div>

            </div>

          </div>

        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }
}

export default connect((state, props)=>({
  post: state.posts[props.params.slug],
  user: state.auth.user
}),{
  retrieve
})(Post)
