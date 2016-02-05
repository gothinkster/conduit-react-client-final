import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update, retrieve } from '../actions/posts'

class EditPost extends Component {
  constructor(props){
    super(props)
    this.state = { post: { tag_list: [] } }
    console.log(props.post)
  }

  componentWillMount(){
    this.props.retrieve(this.props.params.slug)
  }

  onSubmit(){
    this.props.dispatch(update(this.state.post))
  }

  addTag(tag){
    this.setState({post: Object.assign({}, this.state.post, {
      tag_list: this.state.post.tag_list.concat([tag])
    })})
  }

  removeTag(index){
    this.setState({post: Object.assign({}, this.state.post, {
      tag_list: [
        ...this.state.post.tag_list.slice(0, index),
        ...this.state.post.tag_list.slice(index + 1)
      ]
    })})
  }

  handleTagKeyPress(e){
    if(e.key === 'Enter'){
      e.preventDefault()

      this.addTag(e.target.value)
      e.target.value = ''
    }
  }

  handleChange(field, e){
    let change = {}
    change[field] = e.target.value

    this.setState({post: Object.assign({}, this.state.post, change)})
  }

  render(){
    let { post } = this.props

    if(post && !post.loading){
      return (
        <div className="editor-page">
          <div className="container page">
            <div className="row">

              <div className="col-md-10 col-md-offset-1 col-xs-12">
                <form onSubmit={this.onSubmit.bind(this)}>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Post Title"
                      onChange={this.handleChange.bind(this, 'title')}
                      defaultValue={post.title}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your post (in markdown)"
                      onChange={this.handleChange.bind(this, 'body')}
                      defaultValue={post.body}></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input className="form-control" type="text" placeholder="Enter tags" onKeyPress={this.handleTagKeyPress.bind(this)} />
                    <div className="tag-list">
                      {
                        post.tag_list.map(function(tag, index){
                          return(
                            <span className="label label-pill label-default" key={index}>
                              <i className="ion-close-round" onClick={this.removeTag.bind(this, index)} />
                              {tag}
                            </span>
                          )
                        }.bind(this))
                      }
                    </div>
                  </fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                    Update Post
                  </button>
                </form>
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

export default connect(
  (state, props)=>({
    post: state.posts[props.params.slug],
  }),
  {
    retrieve
  }
)(EditPost)





// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import PostForm from './PostForm.jsx'
// import { retrieve } from '../actions/posts'

// class EditPost extends Component{
//   componentWillMount(){
//     this.props.retrieve(this.props.params.slug)
//   }

//   render(){
//     const { post } = this.props

//     return (
//       <div className="EditPost">
//         <h1>Edit your post</h1>
//         <PostForm action="edit" post={post} />
//       </div>
//     )
//   }
// }

