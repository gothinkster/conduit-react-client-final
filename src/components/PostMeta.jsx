import React from 'react'
import { Link } from 'react-router'

function PostMeta({ post }){
  return (
    <div className="post-meta">
      <Link to={ '/'+post.author.username }><img src="http://i.imgur.com/Qr71crq.jpg" /></Link>
      <div className="info">
        <Link to={ '/'+post.author.username } className="author">{ post.author.username }</Link>
        <span className="date">January 20th</span>
      </div>
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp;
        Follow { post.author.username } <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp;
        Favorite Post <span className="counter">(29)</span>
      </button>
    </div>
  )
}

export default PostMeta
