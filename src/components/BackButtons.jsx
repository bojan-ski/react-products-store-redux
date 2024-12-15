import React from 'react'
import { Link } from 'react-router-dom'


const BackButtons = ({ backPath }) => {
    return (
        <Link to={`${backPath}`} className="btn btn-warning">
            Back
        </Link>
    )
}

export default BackButtons