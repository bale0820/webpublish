import {setObject, getObject, updateObject, deleteObject } from '../commons/util.js';

const person = {
    name : '홍길동',
    age : 20,
    job : '개발자'
}


const fruits = {
    name : 'apple',
    emoji : '🍎'
}


//person 객체를 이용하여 CRUD 작업을 진행하는 함수 정의
//setObject, getObject, updateObject, deleteObject
//Arrow function
//1. person 객체에 프로퍼티 추가
//예) setObject(person, 'address', '강남구')
// const setObject = (obj, key, value) => {
//     obj[key] = value ;
// }

// //2. 객체의 프로퍼티 값 반환
// const getObject = (obj, key) => {
//     return obj[key];
// }

// //3. 객체의 프로퍼티 값을 수정
// const updateObject = (obj,key, newValue) => {
//     obj[key] = newValue;
// }
// const deleteObject = (obj, key) => {
//     delete obj[key];
// }

setObject(person, 'address', '강남구');
console.log(person);
let job = getObject(person, 'job');
console.log(job);
updateObject(person, 'age', 32);
console.log(person);
deleteObject(person, 'name');
console.log(person);


setObject(fruits, 'color', 'red');
let e = getObject(fruits, 'emoji');
updateObject(fruits, 'color', 'green');
deleteObject(fruits, 'emoji');

console.log(fruits, e);



// setObject(fruits, 'color', 'red');
// getObject(fruits, job);

