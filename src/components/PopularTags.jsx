import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { retrieveAll } from '../actions/tags'

class PopularTags extends Component{
  componentWillMount(){
    this.props.retrieveAll()
  }

  render(){
    return (
      <div className="tag-list">
        {this.props.tags.map((tag)=>(
          <Link className="label label-pill label-default" to={'/tag/'+tag}>{tag}</Link>
        ))}
      </div>
    )
  }
}
export default connect((state)=>({
  tags: state.tags
}), {
  retrieveAll
})(PopularTags)
