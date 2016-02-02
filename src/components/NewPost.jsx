import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RaisedButton, FlatButton, TextField } from 'material-ui'
import { update, create } from '../actions/posts'
// import PostForm from './PostForm.jsx'

class NewPost extends Component {
  constructor(props){
    super(props)
    this.state = { tags: [] }
  }
  onSubmit(){
    this.props.dispatch(create({
      title: this.refs.postTitle.getValue(),
      body: this.refs.postBody.getValue(),
      tag_list: this.state.tags
    }))
  }

  addTag(){
    this.setState({
      tags: this.state.tags.concat([this.refs.tag.getValue()])
    })

    this.refs.tag.clearValue()
  }

  removeTag(index){
    this.setState({
      tags: [
        ...this.state.tags.slice(0, index),
        ...this.state.tags.slice(index + 1)
      ]
    })
  }

  render(){
    return (
      <div>
        <p>Create a new post</p>
        <div className="post-form">
          <div className="post-form-title">
            <TextField
              ref="postTitle"
              hintText="Title"
              onEnterKeyDown={this.onSubmit.bind(this)}
            />
          </div>
          <div className="post-form-body">
            <TextField
              ref="postBody"
              hintText="Tell your story..."
              multiLine={true}
              onEnterKeyDown={this.onSubmit.bind(this)}
            />
          </div>
          <div className="post-tag-form">
            <div className="tags">
              {this.state.tags.map(function(tag, index){
                return (
                  <div key={index}>
                    <span>{tag}</span>
                    <RaisedButton
                      label="x"
                      primary={true}
                      onTouchTap={this.removeTag.bind(this, index)}
                    />
                  </div>)
              }.bind(this))}
            </div>
            <TextField
              ref="tag"
              hintText="Tags"
              onEnterKeyDown={this.addTag.bind(this)}
            />
            <RaisedButton
              label="Add Tag"
              onTouchTap={this.addTag.bind(this)}
            />
          </div>
          <RaisedButton
            label="Submit"
            primary={true}
            onTouchTap={this.onSubmit.bind(this)}
          />
        </div>
      </div>
    )
  }
}

// export default connect()(PostForm)

// const NewPost = ()=>{
//   return (
//     <div>
//       <p>Create a new post</p>
//       <PostForm action="new" />
//     </div>
//   )
// }

export default connect()(NewPost)
