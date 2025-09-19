import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { useState, useEffect} from "react";
export function Header({cartCount}) {
    return(
        <div className="header-outer">
            <div className="header">
            <Link to="/" className="header-left"><FaShoppingBasket /><span>Shoppy</span></Link>
            <nav className="header-right">
                <Link to="/all" >Products</Link>
                <Link to="/cart" >MyCart({cartCount})</Link>
                <Link to="/login" ><button type="button">Login</button></Link>
                <Link to="/signup" >Sign up</Link>
            </nav>
            </div>
        </div>
    );
}


