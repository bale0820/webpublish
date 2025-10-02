import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { LoginContext } from '../../context/LoginContext';
import { useAuth } from '../../hooks/useAuth';

export function Header({cartCount}) {
    const {isLogin} = useContext(LoginContext);
    const {handleLogout} = useAuth();

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className='header-icons'/>
                        <span className='header-icons-cart'>{cartCount}</span>
                    </Link>

                    {isLogin ? 
                        <button type="button" onClick={handleLogout}>Logout</button>
                    :
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    }
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>                   
                    <Link to="/support">
                        <button type="button">Support</button>
                    </Link>                   
                </nav>
            </div>
        </div>
    );
}