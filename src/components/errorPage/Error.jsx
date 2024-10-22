import { Link } from "react-router-dom"

const Error = ({ textOne, textTwo }) => {
    return (
        <>
            <div className="error-msg mb-4">
                <h1>
                    {textOne}
                </h1>
                <h2>
                    {textTwo}
                </h2>
            </div>
            <Link to='/' className="btn-warning btn fw-bold">
                Back Home
            </Link>
        </>
    )
}

export default Error