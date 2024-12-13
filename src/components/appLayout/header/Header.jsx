import React from "react"
// components
import Navbar from "./Navbar"
import Onboarding from "./Onboarding"


const Header = () => {
    return (
        <header>
            <Onboarding />
            <Navbar />
        </header>
    )
}

export default Header