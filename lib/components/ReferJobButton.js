import React, { Component } from 'react'
import ToggleDisplay from 'react-toggle-display';

class ReferJobButton extends Component {
  constructor(props) {
    super(props)

    this.state={viewInputs: this.props.viewInputs}
  }
  render() {

    return(
      <div>
      <button className='btn btn-default'
      onClick={this.props.openEmailInput}
       > Refer Job to Friend</button>
      <ToggleDisplay show={!this.props.viewInputs}>
      <form>
      <input type='email'/>
      <input className='btn btn-default' type='submit' name='send-email'/>
      </form>
      </ToggleDisplay>
      </div>
    )
  }
}

export default ReferJobButton;
