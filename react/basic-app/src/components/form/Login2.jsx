import { useState, useRef } from "react";
import { validateLoginCheck } from "../../util/validate.js";

export function Login2() {
    const refs = {
        idref: useRef(null),
        passref: useRef(null),
        msgIdRef : useRef(null),
        msgPassRef : useRef(null)
    };
    const initForm = { id: '', pass: '' };
    const [form, setForm] = useState(initForm);
    const [msg, setMsg] = useState({ id: '', pass: '' });
    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        // setForm((prev) => ({...prev, [name] : value}));
        // refs.msgIdRef.current.innerText = "";
        // refs.msgIdRef.current.innerText = "";
        setMsg({id : "", pass : ""});
    };
    const handleResetForm = () => {
        setForm(initForm);

    };
    const handleSubmit = (e) => {
        e.preventDefault(); //브라우저(Dom객체) 이벤트 정지

        //자바스크립트에서 return에서 넘기는건 프롭스, 함수에서 넘기는건 파라미터인자
        if (validateLoginCheck(refs, setMsg)) {
            console.log("submit===>>", form);
        }
    };
    console.log(form);
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login2</h1>
            <ul>
                <li>
                    <label>아이디</label>
                    <input type="text" name="id" ref={refs.idref} value={form.id} onChange={handleChangeForm} />
                    <span ref={refs.msgIdRef}>{msg.id}</span> 
                </li>
                <li>
                    <label>패스워드</label>
                    <input type="password" name="pass" ref={refs.passref} value={form.pass} onChange={handleChangeForm} />
                    <span ref={refs.msgPassRef}>{msg.pass}</span>
                </li>
                <li>
                    <button type="submit">Login</button>
                    <button type="button" onClick={handleResetForm}>Reset</button>

                </li>



            </ul>



        </form>


    );
}