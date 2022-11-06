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


export default Layout