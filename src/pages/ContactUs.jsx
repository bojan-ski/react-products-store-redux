import React from "react"
// components
import PageHeader from "../components/PageHeader"
import CompanyDetails from "../components/contactPage/CompanyDetails";
import ContactForm from "../components/contactPage/ContactForm";


const ContactUs = () => {
  return (
    <div className="contact-us-page my-5">

      <PageHeader page='Contact Us' />

      <div className="container">
        <div className="row">

          {/* row item one */}
          <div className="col-12 col-md-5 mb-3">
            <CompanyDetails />
          </div>

          {/* row item two */}
          <div className="col-12 col-md-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs