
export function validateLoginCheck(refs, setMsg) {
    if (refs.idref.current.value === "") {
        setMsg({ id: "아이디를 입력해주세요!" });
        refs.idref.current.focus();
        return false;
    } else if (refs.passwordref.current.value === "") {
        setMsg({ password: "패스워드를 입력해주세요!" });
        refs.passwordref.current.focus();
        return false;
    } else if (refs.passwordConfirmref.current.value === "") {
        setMsg({ passwordConfirm: "패스워드중복확인를 입력해주세요!" });
        refs.passwordConfirmref.current.focus();
        return false;
    } else if (refs.passwordref.current.value !== refs.passwordConfirmref.current.value) {
        setMsg({ passwordequal: "비밀번호 두개가 일치하지않습니다!" });
        refs.passwordConfirmref.current.focus();
        return false;
    } else if (refs.nameref.current.value === "") {
        setMsg({ name: "이름을 입력해주세요!" });
        refs.nameref.current.focus();
        return false;
    } else if (refs.phoneref.current.value === "") {
        setMsg({ phone: "전화번호를 입력해주세요!" });
        refs.phoneref.current.focus();
        return false;
    } else if (refs.emailref.current.value === "") {
        setMsg({ email: "이메일을 입력해주세요!" });
        refs.emailref.current.focus();
        return false;
    } else if (refs.emailDomainref.current.value === "default") {
        setMsg({ emailDomain: "이메일도메인을 입력해주세요!" });
        refs.emailDomainref.current.focus();
        return false;
    }
    return true;
}
