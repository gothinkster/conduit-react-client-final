import React from 'react'
import { Link } from 'react-router'

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post)=>(
        <div className="post-list-item" key={post.slug}>
          <p><Link to={'posts/'+post.slug}>{post.title}</Link>
            { post.author ? (
              <span> by <Link to={post.author}>{post.author}</Link></span>
            ) : null }
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList
