import React from "react"
import { Link } from "react-router-dom"


const FormInputCheckbox = ({ linkTitle, linkUrl }) => {
    return (
        <div className="d-flex align-items-center mb-2">
            <input className="form-check-input mt-0" type="checkbox" required />
            <p className="ms-2 mb-0">
                I accept:
                <Link className="fw-bold ms-2" to={`/${linkUrl}`}>
                    {linkTitle}
                </Link>
            </p>
        </div>
    )
}

export default FormInputCheckbox