import React from 'react'

export default function Newcityinput(props) {
  
  let {placeholder, onChange}=props

  return (
    <>
    
    <input className='input-text'  onChange={onChange}  placeholder={placeholder} prequired/>
    
    </>
    
  )
}
