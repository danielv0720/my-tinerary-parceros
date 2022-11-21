import React from 'react'

const Checkbox = (props) => {
    let { continent, onChange } = props

  return (
    <div>
        
        <input  type="checkbox"  id={continent} onChange={onChange} value={continent} name={continent} />
        <label htmlFor={continent} >{continent} </label>
    </div>
  )
}

export default Checkbox