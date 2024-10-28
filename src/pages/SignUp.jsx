// api func
import userCreateAccount from "../api/userCreateAccount"
// components
import FormInput from "../components/FormInput"
import FormInputCheckbox from "../components/FormInputCheckbox"


const SignUp = () => {
    const handleSignUpUserSubmit = async e => {
        e.preventDefault()        

        const enteredUsername = e.target.elements[0].value.trim()
        const enteredEmail = e.target.elements[1].value.trim()
        const enteredPassword = e.target.elements[2].value

        const response = await userCreateAccount(enteredUsername, enteredEmail, enteredPassword)

        if (response) {
            e.target.elements[0].value = ''
            e.target.elements[1].value = ''
            e.target.elements[2].value = ''
            e.target.elements[3].checked = false
            e.target.elements[4].checked = false

            // navigate user
            setTimeout(() => window.location.href = '/profile', 1500)
        }
    }

    return (
        <div className='sing-up-page'>
            <div className="container">
                <form onSubmit={handleSignUpUserSubmit}>
                    <h3 className="text-center mb-4">
                        Sign Up
                    </h3>

                    {/* login email */}
                    <FormInput label='Username' name="signUpUsername" type='text' required={true} />

                    {/* login email */}
                    <FormInput label='Email address' name="signUpEmail" type='email' required={true} />

                    {/* login password */}
                    <FormInput label='Password' name="signUpPassword" type='password' required={true} />

                    {/* Terms & Conditions checkbox */}
                    <FormInputCheckbox linkTitle='Terms & Conditions' linkUrl='terms-and-conditions' />

                    {/* Privacy Policy checkbox */}
                    <FormInputCheckbox linkTitle='Privacy Policy' linkUrl='privacy-policy' />

                    {/* login submit btn */}
                    <button type="submit" className="btn btn-primary mt-2">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp