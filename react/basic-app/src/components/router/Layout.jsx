
import { Header } from "./Header.jsx";
import { Footer } from "./Foooter.jsx";
import {Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
/**
 * 회면 출력 형식
 */
export function Layout() {
    return (
        <div>
            <Header> 
                {/* 자식 컴포넌트를 Header컴포넌트의 props로 받는 경우 {children} */}
                <Link to='/'  style={{padding : "10px", color : "white"}}>Home</Link>
                <Link to='/login' style={{padding : "10px", color : "white"}}>로그인</Link>
                 <Link to='/Signup' style={{padding : "10px", color : "white"}}>회원가입</Link>
                 <Link to='/about' style={{padding : "10px", color : "white"}}>About</Link>
                 <Link to='/support' style={{padding : "10px", color : "white"}}>Support</Link>
            </Header>
            <div style={{height : "700px"}}>
                <Outlet />
            </div>
            <Footer />

        </div>
    );
}