import React from 'react'

export default function NewHotel(props) {
  
  let {placeholder}=props

  return (
    <>
    
    <input className="input-signup"  placeholder={placeholder} prequired/>
    
    </>
    
  )
}
