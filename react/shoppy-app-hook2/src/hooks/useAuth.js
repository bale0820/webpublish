import { useContext } from "react";
import { LoginContext } from "../context/LoginContext.jsx";

export function useAuth() {
    const {isLogin, setIsLogin} = useContext(LoginContext);

    const handleLogin = (userId) => {
        if(!isLogin) {
            setIsLogin(!isLogin);
            const loginInfo= {
                "userId" : userId,
                "token" : "asdsadasd"
            }
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        }
    }


    const handleLogout = () => {
        if(isLogin) {
            setIsLogin(!isLogin);
            localStorage.removeItem("loginInfo");
        }

    }

    return{handleLogin, handleLogout};
}