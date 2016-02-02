import react, { Component } from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField } from 'material-ui'

class Comments extends Component{
  onSubmit(){

  }

  render(){
    return (
      <div className="comments">
        <TextField
          ref="commentBody"
        />
        <RaisedButton
          label="Submit"
          primary={true}
          onTouchTap={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default connect()(Comments)
