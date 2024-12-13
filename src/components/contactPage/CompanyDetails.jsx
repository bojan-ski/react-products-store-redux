import React from 'react'
// react icons
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const CompanyDetails = () => {
    return (
        <div className='company-details'>
            <p className="fw-bold fs-3">
                SHOP easy
            </p>
            <p className="fw-bold">
                <SiHomeassistantcommunitystore />
                <span className="ms-2">
                    Some address, city, country
                </span>
            </p>
            <p className="fw-bold">
                <MdEmail />
                <span className="ms-2">
                    someemail@address.com
                </span>
            </p>
            <p className="fw-bold">
                <FaPhoneAlt />
                <span className="ms-2">
                    +123
                </span>
                <span className="ms-1">
                    444
                </span>
                <span className="ms-1">
                    555
                </span>
            </p>
            <p className="fw-bold">
                CRN:
                <span className="ms-2">
                    11122233444
                </span>
            </p>
        </div>
    )
}

export default CompanyDetails