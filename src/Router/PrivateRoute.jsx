/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from './../Authentication/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading}=useContext(AuthContext)

    if(loading){
        return 
    }
    
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;