import { Link } from "react-router-dom"
// context
import { useGlobalContext } from "../context"
// api func
import userLogin from "../api/userLogin"
// components
import FormInput from "../components/FormInput"


const Login = () => {
    const {navigate} = useGlobalContext()

    const handleLoginUserSubmit = async e => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()
        const enteredPassword = e.target.elements[1].value

        // const response = loginUser(enteredEmail, enteredPassword)
        const response = await userLogin(enteredEmail, enteredPassword)      

        if(response){
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            // navigate user
            setTimeout(() => navigate('/profile'), 1500)
            // window.location.href = '/profile'           
        }
    }

    return (
        <div className='login-page'>
            <div className="container">
                <section className="login-page-content">

                    <div className="login-page-main mb-4">
                        <h3 className="text-center mb-4">
                            Login
                        </h3>

                        <form onSubmit={handleLoginUserSubmit}>
                            {/* login email */}
                            <FormInput label='Email address' name="loginEmail" placeholder='Enter email address' type='email' required={true} />

                            {/* login password */}
                            <FormInput label='Password' name="loginPassword" placeholder='Enter password' type='password' required={true} />

                            {/* login submit btn */}
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                    </div>

                    <div className="login-page-footer d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                            Need a new password?
                        </p>
                        <Link to='/forgot-password' className="btn btn-warning">
                            Forgot Password
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login