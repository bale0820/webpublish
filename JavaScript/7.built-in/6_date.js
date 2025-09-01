/**
 * Date 날짜 형식 클래스 
 * - Date 클래스 생성후 getFullYear()
 */

console.log(Date.now()); //자바스크립에서는 잘안씀
console.log(new Date()); //권장함!!!

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
console.log(`${year}년 ${month}월 ${day}일`);
console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));

console.log(date.toLocaleString());