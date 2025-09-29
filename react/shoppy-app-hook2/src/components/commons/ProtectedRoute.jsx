import React, { useContext, useRef } from 'react';
import { LoginContext } from '../../context/LoginContext.jsx';
import { Navigate } from 'react-router-dom';

export  function ProtectedRoute({children}) {
    const {isLogin} = useContext(LoginContext);
    const isAlerf = useRef(false);
    if(isLogin) {
        return (
            <>
            {children}
            </>
        );
    }else {
        if(!isAlerf.current) {
            alert("로그인 후 이용가능합니다!");
            isAlerf.current = true;
        }
        return(
        <Navigate to="/login"/>
        );
    }
}

