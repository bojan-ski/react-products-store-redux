import React from "react"


const FormInput = ({ label, name, type, placeholder, value, required, onMutate, disabled, maxLength, minLength, max, min }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="fw-bold form-label">
                {label}:
            </label>
            <input type={type} className="form-control" id={name} name={name} placeholder={placeholder} value={value} required={required} onChange={onMutate} disabled={disabled} maxLength={maxLength} minLength={minLength} max={max} min={min}/>
        </div>
    )
}

export default FormInput