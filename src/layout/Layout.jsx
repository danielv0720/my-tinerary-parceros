import React from 'react'
import Footer from '../components/Footer/Footer'
import '../App.css'

import Navbar from '../components/Navbar'

const Layout = (props) => {
  return (
    <div className='d-flex column w-100'>
        <Navbar/>
        <div className='flex-grow'>{props.children}</div>
        <Footer/>
    </div>
  )
}

export default Layout