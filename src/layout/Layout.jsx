import React from 'react'

import '../App.css'
/* import Header from '../components/Header' */
import Navbar from '../components/Navbar'

const Layout = (props) => {
  return (
    <div className='d-flex column w-100'>
        <Navbar/>
        <div className='flex-grow'>{props.children}</div>
    </div>
  )
}

export default Layout