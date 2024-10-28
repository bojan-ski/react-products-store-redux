import { Link } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from '../features/user/userSlice'
// api func
import fetchUserShippingDetailsFromFirebase from "../api/fetchUserShippingDetailsFromFirebase"
// components
import PageHeader from "../components/PageHeader"
import UserShippingDetails from "../components/profilePage/UserShippingDetails"


// LOADER
export const loader = async () => {
  const userShippingDetails = await fetchUserShippingDetailsFromFirebase()

  return userShippingDetails
}

const Profile = () => {
  const { userName } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className="profile-page">
      <div className="container">

        <PageHeader page="Profile" />

        {userName ? (
          <>
            <div className="profile-btn-container d-flex align-items-center justify-content-between">
              <div>
                <Link to='/profile/order-history' className='btn-info btn me-3'>
                  Order history
                </Link>
                <Link to='/profile/bookmarked-products' className='btn-info btn me-3'>
                  Bookmarked Products
                </Link>
              </div>
              <button className='btn btn-danger' onClick={() => dispatch(logOutUser())}>
                log out
              </button>
            </div>

            <UserShippingDetails />
          </>
        ) : (
          <h1>Please login</h1>
        )}
      </div>
    </div>
  )
}

export default Profile