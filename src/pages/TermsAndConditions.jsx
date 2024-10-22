// components
import BackButtons from "../components/BackButtons"
import PageHeader from "../components/PageHeader"
// data 
import termsAndConditions from '../data/termsAndConditions'


const TermsAndConditions = () => {
    return (
        <div className='t&c-page'>
            <div className="container">

                <BackButtons backPath='/sign-up' />

                <PageHeader page='Terms And Conditions' />

                <section className='t&c-page-content'>
                    <div className="disclaimer text-center mb-5">
                        <h5>
                            Terms And Conditions - content has been generate using AI
                        </h5>
                        <h5>
                            This is just for development purposes
                        </h5>
                    </div>
                    <ul>
                        {termsAndConditions.map(paragraph => <li key={paragraph}>{paragraph}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default TermsAndConditions