import React from "react"
// components
import FormInput from "../FormInput"
import CheckoutSubheader from "./CheckoutSubheader"


const ShippingDetails = ({ shippingDetails, setShippingDetails }) => {
    const onInputDataShippingDetails = (e) => {
        setShippingDetails(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const { streetAddress, city, zip, state } = shippingDetails

    return (
        <div>
            {/* Page subheader - components */}
            <CheckoutSubheader textOne='Shipping Details' textTwo='ADDRESS' />

            {/* Form input - components */}
            {/* street address */}
            <FormInput label='Street address' name='streetAddress' type='text' placeholder='Enter street address' value={streetAddress} required={true} onMutate={onInputDataShippingDetails} />

            {/* city */}
            <FormInput label='City' name='city' type='text' placeholder='Enter city name' value={city} required={true} onMutate={onInputDataShippingDetails} />

            {/* ZIP code */}
            <FormInput label='ZIP' name='zip' type='number' placeholder='Enter ZIP code' value={zip} required={true} onMutate={onInputDataShippingDetails} />

            {/* state - country */}
            <FormInput label='State' name='state' type='text' placeholder='Enter state name' value={state} required={true} onMutate={onInputDataShippingDetails} />
        </div>
    )
}

export default ShippingDetails