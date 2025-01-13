import React from 'react'
import { Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";


const ProfilePrivateRoute = ({ children }) => {
    const { userName, userID } = useSelector(state => state.user)

    return (userName && userID) ? children : <Navigate to='/login' />
}

export default ProfilePrivateRoute