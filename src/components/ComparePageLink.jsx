import React from 'react'
import { Link } from 'react-router-dom'
// react-icons
import { HiMiniArrowsRightLeft } from "react-icons/hi2";


const ComparePageLink = () => {
    return (
        <Link to='/compare' className='btn btn-orange-hover compare-page-link'>
            <HiMiniArrowsRightLeft size={25}/>
        </Link>
    )
}

export default ComparePageLink