import React from "react"
// components
import Auth from "./Auth"
import HeaderNavbar from "./HeaderNavbar"


const Header = () => {
    return (
        <header>
            <Auth />
            
            <HeaderNavbar />
        </header>
    )
}

export default Header