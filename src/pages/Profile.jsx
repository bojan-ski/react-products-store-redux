import React from "react"
// redux
import { useSelector } from "react-redux"
// api func
import fetchUserShippingDetailsFromFirebase from "../api/fetchUserShippingDetailsFromFirebase"
// components
import NotLoggedInMsg from "../components/profilePage/NotLoggedInMsg"
import PageNavigationOptions from "../components/profilePage/PageNavigationOptions"
import UserShippingDetails from "../components/profilePage/UserShippingDetails"


// LOADER
export const loader = async () => {
  const userShippingDetails = await fetchUserShippingDetailsFromFirebase() 

  return userShippingDetails
}

const Profile = () => {
  const { userName } = useSelector(state => state.user)

  return (
    <div className="profile-page my-5">
      <div className="container">

        {userName ? (
          <>
            <PageNavigationOptions />

            <UserShippingDetails />
          </>
        ) : (
          <NotLoggedInMsg />
        )}
      </div>
    </div>
  )
}

export default Profile