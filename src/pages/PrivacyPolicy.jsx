import React from "react";
// components
import BackButton from "../components/BackButton";
import PageHeader from "../components/PageHeader"
// data
import privacyPolicy from "../data/privacyPolicyContent"


const PrivacyPolicy = () => {
    return (
        <div className='privacy-policy-page my-5'>
            <div className="container">

                <BackButton backPath='/sign-up' />

                <PageHeader page='Privacy Policy' />

                <section className='privacy-policy-page-content'>
                    <div className="disclaimer text-center mb-5">
                        <h5>
                            Privacy Policy - content has been generate using AI
                        </h5>
                        <h5>
                            This is just for development purposes
                        </h5>
                    </div>

                    <ul>
                        {privacyPolicy.map(paragraph => <li key={paragraph}>{paragraph}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy