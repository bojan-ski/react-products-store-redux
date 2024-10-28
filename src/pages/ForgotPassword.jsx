import { Link, useNavigate } from "react-router-dom"
// api func
import userResetPassword from "../api/userResetPassword"
// components
import FormInput from "../components/FormInput"


const ForgotPassword = () => {
    const navigate = useNavigate()

    const handleResetPassword = async e => {
        e.preventDefault()

        if (window.confirm('Are you sure you want to reset Your password?')) {
            const enteredEmail = e.target.elements[0].value.trim()

            const response = await userResetPassword(enteredEmail)           

            if (response) {
                e.target.elements[0].value = ''

                // after the user has submitted for a new password, the user is redirected to the Dashboard page
                setTimeout(() => navigate('/'), 2500)
            }
        }
    }

    return (
        <div className='forgot-password-page'>
            <div className="container">
                <section className="forgot-password-content">

                    <div className="forgot-password-main mb-4">
                        <h3 className="text-center mb-4">
                            Forgot Password
                        </h3>

                        <form onSubmit={handleResetPassword}>
                            {/* login email */}
                            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

                            {/* reset submit btn */}
                            <button type="submit" className="btn btn-primary">
                                Reset Password
                            </button>
                        </form>
                    </div>

                    <div className="forgot-password-footer d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                            Don't need a new password?
                        </p>
                        <Link to='/login' className="btn btn-warning">
                            Login
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ForgotPassword