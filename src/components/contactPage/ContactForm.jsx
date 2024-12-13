import React, { useState } from 'react'
// api
import sendCustomerMessage from '../../api/emailJS/sendCustomerMessage';
// components
import FormInput from '../FormInput'
import FormSubmitBtn from '../FormSubmitBtn'
// toastify
import { toast } from 'react-toastify';


const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleContactFormSubmit = async e => {
        e.preventDefault()

        setIsLoading(true);

        const emailContent = {
            from_name: e.target.elements[0].value,
            from_email: e.target.elements[1].value,
            email_topic: e.target.elements[2].value,
            message: e.target.elements[3].value
        }

        const data = {
            service_id: `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
            template_id: `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
            user_id: `${import.meta.env.VITE_EMAILJS_API_KEY}`,
            template_params: emailContent
        };

        const response = await sendCustomerMessage(data)

        if (response) {
            // success message
            toast.success('Your message has been send');

            // form reset
            e.target.elements[0].value = '';
            e.target.elements[1].value = '';
            e.target.elements[2].value = '';
            e.target.elements[3].value = '';
        } else {
            // error message
            toast.error('There was an error while sending your message, please try again')
        }

        setIsLoading(false);
    }

    return (
        <form onSubmit={handleContactFormSubmit} className='contact-us-form'>
            {/* username */}
            <FormInput label='Your name' name="customerName" type='text' required={true} />

            {/* email */}
            <FormInput label='Your email address' name="customerEmail" type='email' required={true} />

            {/* subject */}
            <FormInput label='Subject' name="customerEmailSubject" type='text' required={true} />

            {/* row item 4 */}
            <div className="col-12 mb-3">
                <label htmlFor="customerMessage" className="form-label fw-bold">
                    Your message
                </label>
                <textarea rows="5" className="form-control" id="customerMessage" required />
            </div>

            {/* submit btn */}
            <FormSubmitBtn label="Send" isLoading={isLoading} />
        </form>
    )
}

export default ContactForm