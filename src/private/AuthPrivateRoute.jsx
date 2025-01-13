import React from 'react'
import { Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";


const AuthPrivateRoute = ({ children }) => {
    const { userName, userID } = useSelector(state => state.user)

    return (!userName && !userID) ? children : <Navigate to='/' />
}

export default AuthPrivateRoute