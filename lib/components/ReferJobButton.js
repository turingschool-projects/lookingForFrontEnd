import React from 'react'

const ReferJobButton = () => {
  //

    return(
      <div>
        <button className='btn btn-default' > Refer Job to Friend</button>
          <form className='hidden'>
            <input type='email'/>
            <input className='btn btn-default' type='submit' name='send-email'/>
          </form>
      </div>
    )

}
//
export default ReferJobButton;
