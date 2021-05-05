
import React from 'react'

class Input extends React.Component {

  render() {
    return (

      <>
        <p>Enter your Bill AMount</p>
        <input type="text" placeholder="Enter bill" required pattern="[0-9]"  />


      </>
    )
  }

}

export default Input
