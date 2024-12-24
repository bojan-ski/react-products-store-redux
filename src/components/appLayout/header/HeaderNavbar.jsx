import React from 'react'
import { NavLink } from 'react-router-dom'
// data
import navigationLinks from '../../../data/navigationLinks'
// components
import Logo from '../Logo'
import CartPageLink from './CartPageLink'


const HeaderNavbar = () => {
    const closeNavbar = () => {
        document.querySelector('.navbar-collapse').classList.remove('show')
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbar-container">

                {/* home btn - link - Logo */}
                <Logo />

                {/* Cart page - link */}
                <div className='cart-option order-1 order-lg-2'>
                    <CartPageLink />
                </div>

                {/* navigation */}
                {/* collapse btn */}
                <button className="navbar-toggler bg-white order-2 order-lg-1" type="button" data-bs-toggle="collapse" data-bs-target="#storeNavbar" aria-controls="storeNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* collapse - navigation links */}
                <div className="collapse navbar-collapse order-3 order-lg-1" id="storeNavbar">
                    <ul className="navbar-nav mx-auto mb-lg-0 text-center">
                        {navigationLinks.map(navigationLink => {
                            return <li key={navigationLink.label} className="nav-item">
                                <NavLink to={navigationLink.href} className='nav-link text-capitalize fw-bold text-white mx-4 mt-1 mt-lg-0' onClick={closeNavbar}>
                                    {navigationLink.label}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default HeaderNavbar