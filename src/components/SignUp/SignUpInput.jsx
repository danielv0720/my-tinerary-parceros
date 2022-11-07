import React from 'react'

import './SignUpInput.css'

const SignUpInput = (props) => {
    let {name, placeholder, type, value, eventFunction} = props
  return (
    <input className='input-signup'  type={type} name={name} placeholder={placeholder} value={value} onChange={eventFunction} />
  )
}

export default SignUpInput