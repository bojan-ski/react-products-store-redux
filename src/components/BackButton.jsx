import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { IoIosArrowBack } from "react-icons/io";


const BackButton = ({ backPath }) => {
    return (
        <Link to={`${backPath}`} className="btn btn-orange-hover">
            <IoIosArrowBack size={20}/>
        </Link>
    )
}

export default BackButton