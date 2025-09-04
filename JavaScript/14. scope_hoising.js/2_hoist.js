/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 객체를 메모리에 생성하고 로드하는 작업
 * - function 키워드로 정의된 함수
 * let/const 변수도 호이스팅은 되지만, “초기화 전까지는 접근 금지” 상태로 둡니다.
 */

test1();
console.log(test1); //stack frame 저장되는 변수명(객체주소 `저장)

function test1() { //호이스팅 작업이 선행 됨!!
    console.log('-----> test1');
}

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는
 * 호이스팅 작업이 선행되지 않음!!!
 */
//변수형 함수
// test2(); //에러발생
let test2 = () =>  {  //호이스팅 작업이 선행 안되!!
    console.log('-----> test2'); 
}

test2(); // 정상 호출

test3();
let test3 = function()  {  //호이스팅 작업이 선행 안되!!
    console.log('-----> test3'); 
}