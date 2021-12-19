import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) { 
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )}

    if(user.email && admin){
        return children;
    }

    return (
        <Navigate to='/home' state= {{ from: location }}/>
    );
};

export default AdminRoute;