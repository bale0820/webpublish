import { useRef, useState } from "react";

export function UserInfo() {

    const refs = {
        nameRef: useRef(null),
        ageRef: useRef(null),
        addressRef: useRef(null),
    }
    const initForm = {
        name: "",
        age: "",
        address: ""
    }
    const [form, setForm] = useState(initForm);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (refs.nameRef.current.value === "") {
            alert("이름을 입력해주세요");
            refs.nameRef.current.focus();
        } else if (refs.ageRef.current.value === "") {
            alert("나이를 입력해주세요");
            refs.ageRef.current.focus();
        } else if (refs.addressRef.current.value === "") {
            alert("주소를 입력해주세요");
            refs.addressRef.current.focus();
        } else {
            console.log("form-->", form);

        }

    }
    const handle = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <>
            <h1>UserInfo</h1>
            <form name="userInfo" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input type="text" name="name" onChange={handle} ref={refs.nameRef} placeholder="이름을 입력해주세요" />
                    </li>
                    <li>
                        <label>나이</label>
                        <input type="text" name="age" onChange={handle} ref={refs.ageRef} placeholder="나이를 입력해주세요" />
                    </li>
                    <li>
                        <label>주소</label>
                        <input type="text" name="address" onChange={handle} ref={refs.addressRef} placeholder="주소를 입력해주세요" />
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button">다시쓰기</button>
                    </li>
                </ul>


            </form>
        </>
    );
}