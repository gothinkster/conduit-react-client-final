import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { retrieve } from '../actions/posts'
import marked from 'marked'

class Post extends Component {
  componentWillMount(){
    this.props.retrieve(this.props.params.slug)
  }
  render(){
    if(this.props.post && !this.props.post.loading){
      const { user, post} = this.props

      return (
        <div className="post">
          <h1>{post.title}</h1>
          { post.author === user.username ? (
            <p>
              <Link to={'/posts/'+post.slug+'/edit'}>Edit</Link>
            </p>
          ) : null }
          <span>written by <Link to={post.author}>{post.author}</Link></span>
          <div dangerouslySetInnerHTML={{__html: marked(post.body, {sanitize: true})}}></div>
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
