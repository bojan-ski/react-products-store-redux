import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// redux
import { useSelector } from "react-redux"
// api func
import userResetPassword from "../api/userResetPassword"
// components
import FormInput from "../components/FormInput"
import FormSubmitBtn from "../components/FormSubmitBtn"
// toastify
import { toast } from "react-toastify"


const ForgotPassword = () => {
    const { userID } = useSelector(state => state.user)

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async e => {
        e.preventDefault()

        if (window.confirm('Are you sure you want to reset Your password?')) {
            setIsLoading(true);

            const enteredEmail = e.target.elements[0].value.trim()

            const response = await userResetPassword(enteredEmail)

            if (response) {
                e.target.elements[0].value = ''

                // success message
                toast.success('Please check your email to complete the reset password process');

                // redirected user
                setTimeout(() => navigate('/login'), 1500)
            } else {
                // error message
                toast.error('There was an error while resetting your password, please try again')
            }

            setIsLoading(false);
        }
    }

    return (
        <div className='forgot-password-page my-5'>
            <div className="container">
                <section className="forgot-password-content">

                    <div className="forgot-password-main mb-4">
                        <h3 className="text-center fw-bold mb-4">
                            Forgot Password
                        </h3>

                        <form onSubmit={handleResetPassword}>
                            {/* email */}
                            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

                            {/* submit btn */}
                            {!userID && <FormSubmitBtn label="Reset Password" isLoading={isLoading} />}
                        </form>
                    </div>

                    <div className="forgot-password-footer d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                            Don't need a new password?
                        </p>
                        <Link to='/login' className="btn btn-warning text-white px-3">
                            Login
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ForgotPassword