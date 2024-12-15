import React from 'react'
import { Link } from 'react-router-dom'


const PageNavigationOptions = () => {
    return (
        <section className="profile-btn-container border-bottom pb-3 mb-5">
            <Link to='/profile/bookmarked-products' className='btn btn-orange-hover me-3'>
                Bookmarked Products
            </Link>
            <Link to='/profile/order-history' className='btn btn-orange-hover'>
                Order history
            </Link>
        </section>
    )
}

export default PageNavigationOptions