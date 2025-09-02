/**
 * ...(Spread Operator) : 전개구문
 * - 객체가 가지고 있는 요소를 전개하는 연산자
 * - iterable object 객체, object literal({..})에서 사용
 * - [...객체], {...객체}
 */

//배열 객체 복사, 결합 : shallow copy
let numbers = [1, 2, 3];
let copynumbers = [...numbers];
let concatNumbers = [...numbers, 100,  ...copynumbers];
let concatNumbers1 = numbers.concat(copynumbers);
console.log(numbers);
console.log(copynumbers);
console.log(concatNumbers);

//오브젝트 리터럴 객체 복사
const hong = {
    name : '홍길동',
    age : 20
}

//홍길동 업데이트 : 이름, 나이, 직업

hongUpdate = {
    ...hong,
    job : '개발자'
}

const list = [
    {...hong},
    {...hongUpdate}
];

console.log(hong);
console.log(hongUpdate);
console.log(list);

