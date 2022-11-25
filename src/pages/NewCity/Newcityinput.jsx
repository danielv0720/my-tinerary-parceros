import React from 'react'

export default function Newcityinput(props) {
  
  let {placeholder, onChange, value}=props

  return (
    <>
    
    <input className='input-text'  onChange={onChange}  placeholder={placeholder} required value={value}/>
    
    </>
    
  )
}
