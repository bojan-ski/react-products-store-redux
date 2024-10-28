import { Navigate } from "react-router-dom"
// redux
import { useSelector } from "react-redux"

const PrivateRoute = ({ children }) => {
    const { userName, userID } = useSelector(state => state.user)

    return (userName && userID) ? children : <Navigate to='/login' />
}

export default PrivateRoute