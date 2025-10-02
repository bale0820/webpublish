import React, { use, useContext, useReducer, useRef } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { Navigate } from 'react-router-dom';
export function ProtectedPageRoute({ children }) {
    const isAlert = useRef(false);
    const { isLogin } = useContext(AuthContext);

    if (!isLogin) { //isLogin = false
        if (!isAlert.current) { //언마운트하고 다시 마운트시 같은객체 재사용함
            alert("로그인이 필요한 서비스입니다. \n로그인 페이지로 이동합니다.");
            isAlert.current = true;
        }
        return (
            <Navigate to="/login" replace /> //실시간 페이지 이동!!
        );
    } else {
        isAlert.current = true;
        return children;
    }
}

