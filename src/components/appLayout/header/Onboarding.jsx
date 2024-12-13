import React from "react"
import { Link } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "../../../features/user/userSlice"


const Onboarding = () => {
  const { userName, userStoreCredit } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className={`onboarding container-fluid text-white bg-dark py-3 ${userName ? 'd-flex align-items-center justify-content-between' : 'text-end'}`}>
      {userName ? (
        <>
          <div className="d-flex align-items-center fw-bold">
            <p className="mb-0">
              Store credit:
            </p>
            <span className="ms-2">
              {userStoreCredit}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-end">
            <h6 className="text-capitalize mb-0 me-3">
              Welcome {userName}
            </h6>
            <button className='btn btn-danger fw-bold' onClick={() => dispatch(logOutUser())}>
              Log out
            </button>
          </div>
        </>
      ) : (
        <>
          <Link to='/sign-up' className='btn fw-bold onboarding-btn me-3'>
            Create an account
          </Link>
          <Link to='/login' className='btn fw-bold onboarding-btn me-3'>
            Sign In
          </Link>
        </>
      )}
    </div>
  )
}

export default Onboarding