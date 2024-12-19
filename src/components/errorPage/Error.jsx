import React from "react"
import { Link } from "react-router-dom"


const Error = ({ textOne, textTwo }) => {
    return (
        <>
            <div className="error-msg mb-4">
                <h1 className="fw-bold mb-3">
                    {textOne}
                </h1>
                <h2 className="fw-bold">
                    {textTwo}
                </h2>
            </div>
            <Link to='/' className="btn btn-light btn fw-bold px-4 py-2 fs-5">
                Back Home
            </Link>
        </>
    )
}

export default Error