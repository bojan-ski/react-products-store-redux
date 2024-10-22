import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"
// api func
import saveUserShippingDetailsToFirebase from "../../api/saveUserShippingDetailsToFirebase"
import editUserShippingDetailsFromFirebase from "../../api/editUserShippingDetailsFromFirebase"
// components
import FormInput from "../FormInput"

const UserShippingDetails = () => {
  const userShippingDetails = useLoaderData()
  const { userProfileDetails } = useGlobalContext()

  const [userShippingDetailsFormData, setUserShippingDetailsFormData] = useState({
    streetAddress: userShippingDetails ? userShippingDetails.ShippingDetailsData.streetAddress : '',
    city: userShippingDetails ? userShippingDetails.ShippingDetailsData.city : '',
    zip: userShippingDetails ? userShippingDetails.ShippingDetailsData.zip : '',
    state: userShippingDetails ? userShippingDetails.ShippingDetailsData.state : '',
  })
  const [isEdit, setIsEdit] = useState(userShippingDetails ? false : true)

  const onInputData = (e) => {
    setUserShippingDetailsFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleSetUserShippingDetails = async e => {
    e.preventDefault()

    if (userShippingDetails) {
      await editUserShippingDetailsFromFirebase(userProfileDetails.userID, userShippingDetails.ShippingDetailsDocID, userShippingDetailsFormData)

      setIsEdit(false)
    }else{      
      await saveUserShippingDetailsToFirebase(userProfileDetails.userID, userShippingDetailsFormData)   
      
      setIsEdit(false)
    }
  }

  const handleClearUserShippingDetailsFormData = () => {   
    setUserShippingDetailsFormData(
      {
        streetAddress: userShippingDetails ? userShippingDetails.ShippingDetailsData.streetAddress : '',
        city: userShippingDetails ? userShippingDetails.ShippingDetailsData.city : '',
        zip: userShippingDetails ? userShippingDetails.ShippingDetailsData.zip : '',
        state: userShippingDetails ? userShippingDetails.ShippingDetailsData.state : '',
      }
    )
  }

  const {streetAddress, city, zip, state} = userShippingDetailsFormData

  return (
    <section className="my-5 profile-page-shipping-details-form">
      <h2 className="text-center mb-4">
        UserShippingDetails
      </h2>

      <h6 className="text-center mb-4">
        <span>THIS IS JUST FOR DEVELOPMENT</span>
        <br />
        <span>PLEASE DO NOT PROVIDED REAL ADDRESS DETAILS</span>
      </h6>

      <form onSubmit={handleSetUserShippingDetails}>
        <FormInput label='Street address' name='streetAddress' type='text' value={streetAddress} placeholder='Enter street address' required={true} onMutate={onInputData} disabled={!isEdit} />
        <FormInput label='City' name='city' type='text' value={city} placeholder='Enter city name' required={true} onMutate={onInputData} disabled={!isEdit} />
        <FormInput label='ZIP' name='zip' type='number' value={zip} placeholder='Enter ZIP code' required={true} onMutate={onInputData} disabled={!isEdit} />
        <FormInput label='State' name='state' type='text' value={state} placeholder='Enter state name' required={true} onMutate={onInputData} disabled={!isEdit} />

        <div className="user-shipping-details-btn-container mt-4 d-flex justify-content-between">
          {isEdit && (
            <>
              <button type="submit" className="btn btn-success">
                Save Details
              </button>
              <button type="button" className='btn btn-danger px-3 py-2' onClick={handleClearUserShippingDetailsFormData}>
                Clear Form
              </button>
            </>
          )}
        </div>
      </form>

      {!isEdit && (
        <button type="button" className='btn btn-warning px-3 py-2' onClick={() => setIsEdit(!isEdit)}>
          Edit Details
        </button>
      )}
    </section>
  )
}

export default UserShippingDetails