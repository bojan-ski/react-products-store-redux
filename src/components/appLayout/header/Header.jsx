import React from "react"
// components
import Onboarding from "./Onboarding"
import HeaderNavbar from "./HeaderNavbar"


const Header = () => {
    return (
        <header>
            <Onboarding />
            <HeaderNavbar />
        </header>
    )
}

export default Header