import React, { useState } from "react"
import { Link } from "react-router-dom"
// api func
import userLogin from "../api/userLogin"
// components
import FormInput from "../components/FormInput"
import FormSubmitBtn from "../components/FormSubmitBtn"
// toastify
import { toast } from "react-toastify"


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginUserSubmit = async e => {
        e.preventDefault()

        setIsLoading(true);

        const enteredEmail = e.target.elements[0].value.trim()
        const enteredPassword = e.target.elements[1].value

        const response = await userLogin(enteredEmail, enteredPassword)

        if (response) {
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            //success message
            toast.success('You have logged in');

            // navigate user
            setTimeout(() => window.location.href = '/profile', 1500)
        } else {
            //error message
            toast.error('There was an error during the login process, please try again')
        }

        setIsLoading(false);
    }

    return (
        <div className='login-page my-5'>
            <div className="container">
                <section className="login-page-content">

                    <div className="login-page-main mb-4">
                        <h3 className="text-center fw-bold mb-4">
                            Login
                        </h3>

                        <form onSubmit={handleLoginUserSubmit}>
                            {/* email */}
                            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

                            {/* password */}
                            <FormInput label='Password' name="loginPassword" placeholder='Enter password' type='password' required={true} />

                            {/* submit btn */}
                            <FormSubmitBtn label="Login" isLoading={isLoading} />
                        </form>
                    </div>

                    <div className="login-page-footer d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                            Need a new password?
                        </p>
                        <Link to='/forgot-password' className="btn btn-warning text-white px-3">
                            Forgot Password
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login