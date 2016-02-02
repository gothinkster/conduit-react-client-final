import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import marked from 'marked'
import { retrieve } from '../actions/posts'
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

                <div className="card">
                  <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div className="card-footer">
                    <a href="profile.html" className="comment-author">
                      <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="profile.html" className="comment-author">Jacob Schmidt</a>
                    <span className="date-posted">Dec 29th</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                  <div className="card-footer">
                    <a href="profile.html" className="comment-author">
                      <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="profile.html" className="comment-author">Jacob Schmidt</a>
                    <span className="date-posted">Dec 29th</span>
                    <span className="mod-options">
                      <i className="ion-edit"></i>
                      <i className="ion-trash-a"></i>
                    </span>
                  </div>
                </div>

                <form className="card comment-form">
                  <div className="card-block">
                    <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                  </div>
                  <div className="card-footer">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                    <button className="btn btn-sm btn-primary">
                     Post Comment
                    </button>
                  </div>
                </form>

              </div>

            </div>

          </div>

          <div ></div>
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
