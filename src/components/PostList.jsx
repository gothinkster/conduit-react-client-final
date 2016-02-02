import React from 'react'
import { Link } from 'react-router'

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post)=>(
        <div className="post-preview">
          <div className="post-meta">
            <Link to={'/'+post.author}>
              <img src="http://i.imgur.com/Qr71crq.jpg" />
            </Link>
            <div className="info">
              <Link to={'/'+post.author} className="author">{ post.author }</Link>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> 29
            </button>
          </div>
          <Link to={'/posts/'+post.slug} className="preview-link">
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
            <span>Read more...</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList
