import React from 'react'
import { Link } from 'react-router-dom'


const HeaderLogo = () => {
    return (
        <Link className="text-dark fs-1 text-white" to="/">
            <span className="fw-bold text-uppercase">
                Shop
            </span>
            <span className="ms-2">
                easy
            </span>
        </Link>
    )
}

export default HeaderLogo