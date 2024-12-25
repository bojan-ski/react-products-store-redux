import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
// redux
import { useSelector } from "react-redux"
// api func
import saveUserShippingDetailsToFirebase from "../../api/saveUserShippingDetailsToFirebase"
import editUserShippingDetailsFromFirebase from "../../api/editUserShippingDetailsFromFirebase"
// components
import FormInput from "../FormInput"


const UserShippingDetails = () => {
  const { userID } = useSelector(state => state.user)
  
  const userShippingDetails = useLoaderData()

  const [isEdit, setIsEdit] = useState(userShippingDetails ? false : true)
  const [userShippingDetailsFormData, setUserShippingDetailsFormData] = useState({
    streetAddress: userShippingDetails ? userShippingDetails.shippingDetailsData.streetAddress : '',
    city: userShippingDetails ? userShippingDetails.shippingDetailsData.city : '',
    zip: userShippingDetails ? userShippingDetails.shippingDetailsData.zip : '',
    state: userShippingDetails ? userShippingDetails.shippingDetailsData.state : '',
  })

  const onInputData = (e) => {
    setUserShippingDetailsFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleSetUserShippingDetails = async e => {
    e.preventDefault()

    if (userShippingDetails) {
      await editUserShippingDetailsFromFirebase(userID, userShippingDetails.shippingDetailsDocID, userShippingDetailsFormData)
    } else {
      await saveUserShippingDetailsToFirebase(userID, userShippingDetailsFormData)
    }

    setIsEdit(false)
  }

  const handleClearUserShippingDetailsFormData = () => {
    setUserShippingDetailsFormData(
      {
        streetAddress: userShippingDetails ? userShippingDetails.shippingDetailsData.streetAddress : '',
        city: userShippingDetails ? userShippingDetails.shippingDetailsData.city : '',
        zip: userShippingDetails ? userShippingDetails.shippingDetailsData.zip : '',
        state: userShippingDetails ? userShippingDetails.shippingDetailsData.state : '',
      }
    )
  }

  const { streetAddress, city, zip, state } = userShippingDetailsFormData

  return (
    <section className="profile-page-shipping-details-form">
      <h2 className="text-center fw-bold mb-3">
        Shipping details
      </h2>

      <h6 className="text-center mb-4">
        <span>THIS IS JUST FOR DEVELOPMENT</span>
        <br />
        <span>PLEASE DO NOT PROVIDED REAL ADDRESS DETAILS</span>
      </h6>

      <form onSubmit={handleSetUserShippingDetails}>
        {/* street address */}
        <FormInput label='Street address' name='streetAddress' type='text' value={streetAddress} placeholder='Enter street address' required={true} onMutate={onInputData} disabled={!isEdit} />

        {/* city */}
        <FormInput label='City' name='city' type='text' value={city} placeholder='Enter city name' required={true} onMutate={onInputData} disabled={!isEdit} />

        {/* zip */}
        <FormInput label='ZIP' name='zip' type='number' value={zip} placeholder='Enter ZIP code' required={true} onMutate={onInputData} disabled={!isEdit} />

        {/* state */}
        <FormInput label='State' name='state' type='text' value={state} placeholder='Enter state name' required={true} onMutate={onInputData} disabled={!isEdit} />

        <div className="user-shipping-details-btn-container mt-4 d-flex justify-content-between">
          {isEdit && (
            <>
              <button type="submit" className="btn btn-success fw-bold px-4 py-2">
                Save Details
              </button>
              <button type="button" className='btn btn-danger fw-bold px-4 py-2' onClick={handleClearUserShippingDetailsFormData}>
                Clear Form
              </button>
            </>
          )}
        </div>
      </form>

      {!isEdit && (
        <button type="button" className='btn btn-warning fw-bold px-4 py-2' onClick={() => setIsEdit(!isEdit)}>
          Edit Details
        </button>
      )}
    </section>
  )
}

export default UserShippingDetails