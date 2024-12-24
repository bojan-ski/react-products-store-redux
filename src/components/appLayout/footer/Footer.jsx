import React from "react"
// component
import Logo from "../Logo"
import FooterNavbar from "./FooterNavbar"


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="footer bg-dark text-white pt-4 pb-3">
            <div className="container">
                <div className="row mb-3">

                    {/* row item 1 */}
                    <div className="col-6 col-lg-9">
                        <Logo />
                    </div>

                    {/* row item 2 */}
                    <div className="col-6 col-lg-3">
                        <FooterNavbar />
                    </div>
                </div>

                <p className="pb-3 mb-0 text-center">
                    &copy; {year} BPdevelopment. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer