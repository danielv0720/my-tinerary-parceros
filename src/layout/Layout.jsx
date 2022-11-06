import React from 'react'

import '../App.css'
/* import Header from '../components/Header' */
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'


const Layout = (props) => {
  return (
    <div className='d-flex column w-100 h-100'>
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
  )
}

/* const Layout = (props) => {
  return (
    <div className='d-flex column w-100 h-100'>
        <Navbar/>
        {props.children}
        <div className='grow-2 h-100 w-100 footer'>Este es el footer</div>
    </div>
  )
} */

export default Layout