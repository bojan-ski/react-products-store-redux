import React from "react"
import { Link } from "react-router-dom"


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="footer bg-dark text-white text-center">
            <div className="pt-3 pb-2 fw-bold">
                <Link to='/terms-and-conditions' className='btn fw-bold text-white me-5'>
                    Terms & Conditions
                </Link>
                <Link to='/privacy-policy' className='btn fw-bold text-white ms-5'>
                    Privacy Policy
                </Link>
            </div>
            <p className="pb-3 mb-0">
                &copy; {year} BP Development. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer