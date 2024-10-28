import { Link } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "../../../features/user/userSlice"


const Onboarding = () => {
  const { userName, userStoreCredit } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className={`onboarding px-3 mb-3 ${userName ? 'd-flex align-items-center justify-content-between' : 'text-end'}`}>
      {userName ? (
        <>
          <div className="d-flex align-items-center fw-bold">
            <p className="text-muted mb-0">
              Store credit:
            </p>
            <span className="ms-1">
              {userStoreCredit}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-end">
            <h6 className="capitalize mb-0 me-3">
              Welcome {userName}
            </h6>
            <button className='btn btn-danger' onClick={() => dispatch(logOutUser())}>
              log out
            </button>
          </div>
        </>
      ) : (
        <>
          <Link to='/sign-up' className='btn-info onboarding-btn btn me-3'>
            Create an account
          </Link>
          <Link to='/login' className='btn-info onboarding-btn btn me-3'>
            Sign In
          </Link>
        </>
      )}
    </div>
  )
}

export default Onboarding