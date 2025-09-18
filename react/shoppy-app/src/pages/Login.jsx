import { useRef, useState } from "react";
import { FaIdBadge } from "react-icons/fa";
import { validateLoginCheck } from "../utils/validate.js";

export function Login() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const initForm = { "id": "", "pwd": "" };
    const [formData, setFormData] = useState(initForm);
    const [errors, setErrors] = useState(initForm);
    // const refs = {idRef : useRef(null), pwdRef : useRef(null)};
    const handleFormChange = (e) => {
        const { name, value } = e.target; // id=t
        setFormData({ ...formData, [name]: value });
        setErrors({id : "", pwd : ""});
    }


    // const validateFormCheck = () => {
       
    //     if (idRef.current.value === "") {
    //         // alert("아이디를 입력해주세요");
    //         setErrors({...errors, id : "아이디를 입력해주세요"});
    //         idRef.current.focus();
    //         return false;
    //     } else if (pwdRef.current.value === "") {
    //         // alert("패스워드를 입력해주세요");
    //          setErrors({...errors , pwd : "패스워드를 입력해주세요"})
    //         pwdRef.current.focus();
    //        return false;
    //     }
    //     return true;
    // }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const param = {
            idRef : idRef,
            pwdRef : pwdRef,
            setErrors : setErrors,
            errors : errors 
        }
        if (validateLoginCheck(param)) {
            console.log('서버전송 --> ', formData);

        }

    }



    return (
        <div className="content">
            <div className="center-layout login-form">
                <h1 className="center-title">로그인</h1>
                <form onSubmit={handleLoginSubmit}>
                    <ul>
                        <li>
                            <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <FaIdBadge />
                                <input type="text" name="id" value={formData.id}
                                    // ref={(el) => refs.idRef.current = el }
                                    ref={idRef}
                                    onChange={handleFormChange}
                                    placeholder="아이디를 입력해주세요" />
                            </div>
                            <span style={{color : "red", fontSize : "0.8rem"}}>{errors.id}</span>
                        </li>
                        <li>
                            <div className="login-form-input">
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" name="pwd" value={formData.pwd}
                                    // ref={(el) => refs.pwdRef.current = el }
                                    ref={pwdRef}
                                    onChange={handleFormChange}
                                    placeholder="비밀번호를 입력해주세요" />
                            </div>
                            <span style={{color : "red", fontSize : "0.8rem"}}>{errors.pwd}</span>
                        </li>
                        <li>
                            <button type="submit"
                                className="btn-main-color"
                            >로그인</button>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" name="status" />
                                <label for="">아이디 저장</label>
                            </div>
                            <div>
                                <a href="#">아이디 찾기</a>
                                <span>&gt;</span>
                                <a href="#">비밀번호 찾기</a>
                                <span>&gt;</span>
                            </div>
                        </li>
                        <li>
                            <button className="btn-main-color-naver">네이버 로그인</button>
                        </li>
                    </ul>
                    <div>
                        <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                    </div>
                </form>
            </div>
        </div>
    );
}