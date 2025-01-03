import React from 'react'


const FormSubmitBtn = ({ label, isLoading }) => {
    return (
        <button type="submit" className="btn btn-orange-hover fw-bold px-5 py-2 mt-2" disabled={isLoading}>
            {label}
        </button>
    )
}

export default FormSubmitBtn