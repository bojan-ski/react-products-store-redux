import React from 'react'
import { Link } from 'react-router-dom'
// react-icons
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
    return (
        <section className='contact-section bg-dark text-white py-5 border-bottom'>
            <div className="container">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-sm-6 mb-1 mb-sm-3">
                        <p>
                            We&apos;d love to hear from you! Whether you have a question about our products, an issue with your order, or just want to share your thoughts, we&apos;re here to help.
                        </p>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-sm-6 col-lg-4 mb-4 ms-0 ms-lg-5">
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
                    </div>

                    {/* row item 3 */}
                    <div className="col-12 text-center">
                        <p className='text-uppercase fs-4 fw-bold'>
                            Or you can reach out to us
                        </p>

                        <Link to='/contact' type='button' className='btn btn-orange-hover px-4 py-2 fw-bold'>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact