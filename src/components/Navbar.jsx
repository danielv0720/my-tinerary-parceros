import React, { useState, useEffect } from 'react'
import '../App.css'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { IoMenuOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
const Navbar = () => {
    console.log("Navbar");
    
    const auth = useSelector(state => state.users)
    /* const isAuth = !!Object.keys(auth).length; */ 
    const isAuth = auth.logged === true;
    const isAdmin = auth.role?.includes('admin')
 
    useEffect(()=>{
        
    })

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
            <ul className={ active }>
                <li className="list-style__none nav-list">
                </li>
                <li className="list-style__none nav-list">
                    <Link to='/' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">Home</Link>
                    <Link to='/cities' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">Cities</Link>
                   { isAuth && isAdmin && <Link to='/mycities' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">My Cities</Link> }
                    { isAuth && isAdmin && <Link to='/newcity' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">New City</Link> }
                   { isAuth && isAdmin && <Link to='/myitineraries' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">My itineraries</Link> }
                   { isAuth && isAdmin && <Link to='/newitinerary' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">New itinerary</Link> }
                </li>
                <li className="list-style__none nav-list">
                    <Link to='/hotels' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">Hotels</Link>
                    { isAuth && isAdmin && <Link to='/newhotel' className="text-decoration__none p-20 text-center d-flex align-center fw-600 dark-light size-20p nav-link">New Hotel</Link> }
                </li>
                <li className="list-style__none nav-list  btn_sig">

                    { !isAuth && isAdmin && <Link to='/signin' className="text-decoration__none p-20 text-center d-flex align-center fw-600  size-20p nav-link signin">Signin</Link> }
                </li>
                <li className="list-style__none nav-list">
                    { !isAuth && isAdmin && <Link to='/signUp' className="text-decoration__none p-20 text-center d-flex align-center fw-600  size-20p nav-link signUp">Sign Up</Link> }

                    { !isAuth && !isAdmin && <Link to='/signin' className="text-decoration__none p-20 text-center d-flex align-center fw-600  size-20p nav-link signin">Signin</Link> }
                </li>
                <li className="list-style__none nav-list">
                 
                    { !isAuth && !isAdmin && <Link to='/signUp' className="text-decoration__none p-20 text-center d-flex align-center fw-600  size-20p nav-link signUp">Sign Up</Link> }

                </li>
            </ul>
            
            {isAuth && <div className='profile-container'>
                <h4>{auth.name}</h4>
                <img className='profile-picture' src={auth.photo} alt="" />
            </div>}
        </nav>
    )
}

export default Navbar