import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {

    let [active, setActive] = useState("nav-container")

    const handleClickMenu = () => {
        active === "nav-container"
            ? setActive("nav-mobile")
            : setActive("nav-container")
    }

    return (
        <nav className='d-flex space-between nav shadow1 w-100 py-10  align-center'>
            <div className="d-flex align-center logo-tittle-nav" >
                <Link to='/' className='d-flex text-decoration__none align-center dark-light'>
                    <Link className='d-flex text-decoration__none align-center dark-light' to='/'><img src="https://cdn-icons-png.flaticon.com/512/169/169477.png?w=360" alt="logo" className='logo-nav' />
                    <h4 className="title-nav" >My Itinerary</h4></Link>
                
                </Link>
            </div>
            <IoMenuOutline className='icon-menu' onClick={handleClickMenu} />
            <ul className={active}>
                <li className="list-style__none nav-list">
                    <Link to='/' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">Home</Link>
                </li>
                <li className="list-style__none nav-list">
                    <Link to='/cities' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">Cities</Link>
                </li>
                <li className="list-style__none nav-list">
                    <Link to='/hotels' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">Hotels</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar