import { Navigate } from "react-router-dom"
// context
import { useGlobalContext } from "../context"

const PrivateRoute = ({ children }) => {
    const { userProfileDetails } = useGlobalContext()

    return userProfileDetails.userName ? children : <Navigate to='/login' />
}

export default PrivateRoute