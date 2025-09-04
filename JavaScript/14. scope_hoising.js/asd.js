// 클로저(Closure) =
// 👉 “함수가 태어날 때 연결된 렉시컬 환경을 실행이 끝난 뒤에도 계속 기억하고, 그 안의 변수에 접근할 수 있는 현상”

function outer() {
  let count = 0;               // outer의 렉시컬 환경에 저장됨
  function inner() {           // inner 함수 객체 생성
    count++;
    console.log(count);
  }
  return inner;                // inner 함수 객체를 반환
}
 let fn = outer();
console.log(fn());
// // console.log(outer.count);
 