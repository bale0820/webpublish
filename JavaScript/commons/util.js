//문자 --> 숫자 변환 함수
export function toNumber(num1,num2) {
    // let obj = {
    //     num1 : parseInt(num1),
    //     num2 : parseInt(num2)
    // };
    // return obj;
    return {
        num1 : parseInt(num1),
        num2 : parseInt(num2)
    };
}

//1. person 객체에 프로퍼티 추가
export const setObject = (obj, key, value) => {
    obj[key] = value ;
}

//2. 객체의 프로퍼티 값 반환
export const getObject = (obj, key) => {
    return obj[key];
}

//3. 객체의 프로퍼티 값을 수정
export const updateObject = (obj,key, newValue) => {
    obj[key] = newValue;
}
export const deleteObject = (obj, key) => {
    delete obj[key];
}