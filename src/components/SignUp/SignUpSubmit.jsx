import React from 'react'
import './SignUpSubmit.css'


const SignUpSubmit = (props) => {

    let {event} = props

  return (
    <button className='submit-signup' onClick={event}  type="submit">Sign Up</button>
  )
}

export default SignUpSubmit