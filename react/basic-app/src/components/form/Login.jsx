import { useState, useRef } from "react";

// 좋습니다 👍
// event.preventDefault()는 프론트엔드에서 **"브라우저의 기본 동작을 막는다"**라는 뜻이에요.

// 1. 기본 동작이 뭔데?

// HTML 요소들에는 "자동으로 하는 행동"이 있어요.

// <form> → submit 버튼 누르면 페이지가 새로고침 되면서 서버로 데이터 전송

// <a href="..."> → 클릭하면 다른 페이지로 이동

// <button type="submit"> → 폼 안에서 누르면 submit 실행

// 이런 걸 "기본 동작"이라고 부릅니다.
export function Login() {
    // const DOM객체의 참조변수 = useRef(null);
    const idRef = useRef(null);
    console.log('idref-->', idRef);
    
    const passwordRef = useRef(null);


    const initForm = { id: "", password: "" };
    const [form, setForm] = useState(initForm);


    const handleChangeForm = (event) => {//id : 't'
        // console.log(`--> ${event.target}`);
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (idRef.current.value === "") {
            alert("아이디를 입력해주세요");
            idRef.current.focus();
        }else if(passwordRef.current.value === "") {
            alert("패스워드를 입력해주세요");
            passwordRef.current.focus();
        }else {
            console.log('서버연동 전송데이터 --> ', form);
        }
    }

    const handleFormReset = () => { setForm(initForm); }




    console.log(form.id, form.password);

    return (
        <>
            <h1>Login</h1>
            <form action="#" method="get" name="login-form" onSubmit={handleSubmit} >
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text" ref={idRef} name="id" value={form.id} onChange={handleChangeForm} placeholder="아이디를 입력해주세요" />
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password" ref={passwordRef}  name="password" value={form.password} onChange={handleChangeForm} placeholder="패스워드를 입력해주세요" />
                    </li>
                    <li>
                        <button type="submit" >로그인</button>
                        <button type="reset" onClick={handleFormReset}>다시쓰기</button>
                    </li>

                </ul>
            </form>
        </>
    );

}