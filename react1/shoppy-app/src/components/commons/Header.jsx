import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { useState, useEffect } from "react";
export function Header({ cartCount }) {
    useEffect(() => {
        const loginInfo = localStorage.getItem('loginInfo');

        // if(loginInfo) {
            console.log('loginInfo', JSON.parse(loginInfo) );
        // } else {
        //     console.log("저장된 로그인 정보 없음");
            
        // }
    },[]);
    
    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left"><FaShoppingBasket /><span>Shoppy</span></Link>
                <nav className="header-right">
                    <Link to="/all" >Products</Link>
                    <Link to="/cart" >MyCart({cartCount})</Link>
                    <Link to="/login" ><button type="button">Login</button></Link>
                    <Link to="/signup" ><button type="button">Sign up</button></Link>
                    <Link to="/support" ><button type="button">고객센터</button></Link>
                </nav>
            </div>
        </div>
    );
}


