import React from 'react'

export default function NewHotel(props) {
  
  let {placeholder, onChange}=props

  return (
    <>
    
    <input className="input-signup"  onChange={onChange}  placeholder={placeholder} prequired/>
    
    </>
    
  )
}
