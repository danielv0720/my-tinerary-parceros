import React from 'react'

const Checkbox = (props) => {
    let { continent, onChange } = props

  return (
    <div>
        <label htmlFor={continent} >{continent} </label>
        <input type="checkbox" name={continent} id={continent} onChange={onChange} value={continent} />
    </div>
  )
}

export default Checkbox