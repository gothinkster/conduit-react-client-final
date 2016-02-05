import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component{
  constructor(props){
    super(props)
    this.state = { comment: {} }
  }
  onSubmit(){

  }

  handleChange(){

  }

  render(){
    return (
      <div className="comments">
        {this.props.comments.map(function(){
          return (
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
          )
        }.bind(this))}

        <form className="card comment-form" onSubmit={this.handleSubmit}>
          <div className="card-block">
            <textarea className="form-control" placeholder="Write a comment..." rows="3" onChange={this.handleChange.bind(this)}></textarea>
          </div>
          <div className="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            <button className="btn btn-sm btn-primary" type="submit">
             Post Comment
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(Comments)
