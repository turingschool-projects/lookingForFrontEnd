import React, { Component } from 'react'
import ToggleDisplay from 'react-toggle-display';

class ReferJobButton extends Component {
  constructor(props) {
    super(props)

    this.state={viewInputs: false}
  }

  viewEmailInputs() {
    return {
      viewInputs: true
    };
  }

  render() {
    return(
      <ToggleDisplay show={this.state.viewInputs}>
      <div>
      <button className='btn btn-default' > Refer Job to Friend</button>
      <form className='hidden'>
      <input type='email'/>
      <input className='btn btn-default' type='submit' name='send-email'/>
      </form>
      </div>
      </ToggleDisplay>
    )
  }
}
//
export default ReferJobButton;
