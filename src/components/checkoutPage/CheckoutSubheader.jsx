import React from "react"


const CheckoutSubheader = ({ textOne, textTwo }) => {
    return (
        <>
            <h5 className="text-center fw-bold mb-3">
                {textOne}
            </h5>
            <h6 className="text-center mb-4">
                <span>THIS IS JUST FOR DEVELOPMENT</span>
                <br />
                <span>PLEASE DO NOT PROVIDED REAL {textTwo} DETAILS</span>
            </h6>
        </>
    )
}

export default CheckoutSubheader