import React from "react"
import { NavLink } from "react-router-dom"
// data
import navigationLinks from "../../../data/navigationLinks"
// components
import CartPageLink from "./CartPageLink"
import HeaderLogo from "./HeaderLogo"


const Navbar = () => {
    const closeNavbar = () => {
        document.querySelector('.navbar-collapse').classList.remove('show')
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid navbar-container">

                {/* home btn - link - Logo */}
                <HeaderLogo />

                {/* navigation */}
                <div className="navigation">
                    {/* collapse btn */}
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#storeNavbar" aria-controls="storeNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* collapse - navigation links */}
                    <div className="collapse navbar-collapse" id="storeNavbar">
                        <ul className="navbar-nav ms-auto mb-lg-0 text-center">
                            {navigationLinks.map(navigationLink => {
                                return <li key={navigationLink.label} className="nav-item">
                                    <NavLink to={navigationLink.href} className='nav-link text-capitalize fw-bold text-white mx-4' onClick={closeNavbar}>
                                        {navigationLink.label}
                                    </NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>

                {/* Cart page - link */}
                <CartPageLink />
            </div>
        </nav>
    )
}

export default Navbar