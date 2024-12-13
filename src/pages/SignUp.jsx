import React, { useState } from "react"
// api
import userCreateAccount from "../api/userCreateAccount"
// components
import FormInput from "../components/FormInput"
import FormInputCheckbox from "../components/FormInputCheckbox"
import FormSubmitBtn from "../components/FormSubmitBtn"
// toastify
import { toast } from "react-toastify"


const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUpUserSubmit = async e => {
        e.preventDefault();

        setIsLoading(true);

        const enteredUsername = e.target.elements[0].value.trim();
        const enteredEmail = e.target.elements[1].value.trim();
        const enteredPassword = e.target.elements[2].value;

        const response = await userCreateAccount(enteredUsername, enteredEmail, enteredPassword);

        if (response) {
            e.target.elements[0].value = '';
            e.target.elements[1].value = '';
            e.target.elements[2].value = '';
            e.target.elements[3].checked = false;
            e.target.elements[4].checked = false;

            //success message
            toast.success('Your account has been created, welcome');

            // navigate user
            setTimeout(() => window.location.href = '/profile', 1500);
        } else {
            //error message
            toast.error('There was an error while creating your account, please try again');
        }

        setIsLoading(false);
    }

    return (
        <div className='sing-up-page my-5'>
            <div className="container">
                <form onSubmit={handleSignUpUserSubmit}>
                    <h3 className="text-center fw-bold mb-4">
                        Sign Up
                    </h3>

                    {/* username */}
                    <FormInput label='Username' name="signUpUsername" type='text' required={true} />

                    {/* email */}
                    <FormInput label='Email address' name="signUpEmail" type='email' required={true} />

                    {/* password */}
                    <FormInput label='Password' name="signUpPassword" type='password' required={true} />

                    {/* Terms & Conditions checkbox */}
                    <FormInputCheckbox linkTitle='Terms & Conditions' linkUrl='terms-and-conditions' />

                    {/* Privacy Policy checkbox */}
                    <FormInputCheckbox linkTitle='Privacy Policy' linkUrl='privacy-policy' />

                    {/* submit btn */}
                    <FormSubmitBtn label="Sign Up" isLoading={isLoading} />
                </form>
            </div>
        </div>
    )
}

export default SignUp