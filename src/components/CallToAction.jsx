import React from 'react'
import { Link } from 'react-router-dom'

import './CallToAction.css'

const CallToAction = (props) => {
    let {path, message, colors} = props

    let styles = `text-decoration__none call-to-action ${colors}`

  return (
    <Link className={styles} to={path}>{message}</Link>
  )
}

export default CallToAction