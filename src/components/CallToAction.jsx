import React from 'react'
import { Link } from 'react-router-dom'


const CallToAction = (props) => {
    let {path, message} = props
  return (
    <Link className="text-decoration__none btn" to={path}>{message}</Link>
  )
}

export default CallToAction