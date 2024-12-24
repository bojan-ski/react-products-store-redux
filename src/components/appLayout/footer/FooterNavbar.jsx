import React from 'react'
import { NavLink } from 'react-router-dom'
// data
import navigationLinks from '../../../data/navigationLinks'


const FooterNavbar = () => {
    return (
        <div className="row">

            {/* sub row item 1 */}
            <div className="col-6">
                <ul className="list-unstyled">
                    {navigationLinks.map(navigationLink => {
                        return <li key={navigationLink.label} className="mb-1">
                            <NavLink to={navigationLink.href} className='text-capitalize fw-bold text-white'>
                                {navigationLink.label}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>

            {/* sub row item 2 */}
            <div className="col-6">
                <ul className="list-unstyled">
                    <li className="mb-1">
                        <NavLink to='/terms-and-conditions' className='text-capitalize fw-bold text-white'>
                            Terms & Conditions
                        </NavLink>
                    </li>
                    <li className="mb-1">
                        <NavLink to='/privacy-policy' className='text-capitalize fw-bold text-white'>
                            Privacy Policy
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterNavbar