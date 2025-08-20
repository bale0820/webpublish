/**
 * 자바에서는 메소드는 객체가 아니지만
 * 자바스크립트에서 함수는 객체다
 * 
 * 함수  정의 : 자바스크립트의 함수는 object 이다!! 힙에 들어간다
 * 1. 일반적인 함수 정의
 * function 함수명(매개변수) {
 *      실행 코드 생성;
 *      return 반환값;
 * }
 * 
 * 2. const 함수명 = (매개변수) =>  {
 *      실행 코드 생성;
 *      return 반환값;  
 * }
 * 
 * 3. 자바스크립트 엔진은 빌트인 함수를 포함하고 있다.
 * - 예) parseInt(), 
 * 
 * 함수 호출 : 함수명(파라미터);
 */

//빌트인 함수 parseInt(정수변환 값);
let str = '10.123';
let number = parseInt(str);
let float = parseFloat(str);
console.log(str, typeof str);
console.log(number, typeof number);
console.log(float, typeof float);


//두 수를 입력받아, 합계를 출력
let num1 = 100;
let num2 = 20;

console.log(`sum = ${num1 + num2}`);

// 함수 호출 : 호이스팅 작업
// 호이스팅이란 파일을 인터프리터하기전에 함수같은것들(function 붙은 놈들)을 미리 힙에 저장하는거다
sum(1,2);
//함수를 이용하여 합계를 출력
function sum(num1, num2) {
    console.log(`sum = ${num1 + num2}`);
}


sum(100,200);

//Arrow 함수 생성
const sum2 = (num1, num2 ) => {
    console.log(`함수호출 :: sum2 = ${num1 + num2}`);
}
//함수 호출 : 호이스팅 불가
sum2(1000,2000);