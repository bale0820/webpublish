//숫자 증가/감소 함소
function counter(count) {
     let number = document.querySelector('#number').textContent;
    if(count === 'increment') {
         if(number >= 0) {
        // document.querySelector('#number').textContent = number + 1; // 복합연산자라 문자열+1로 받아들임
        document.querySelector('#number').textContent = ++number;
    }
    } else {
         if(number > 0) {
        // document.querySelector('#number').textContent = number + 1; // 복합연산자라 문자열+1로 받아들임
        document.querySelector('#number').textContent = --number;
    }

    }
}



// //숫자 증가 함수
// function increment() {
//     // number = document.querySelector('#number').value; //form -> input
//      let number = document.querySelector('#number').textContent; //단일연산자이면 바꿔준다

//     //0보다 크면 1증가
//     if(number >= 0) {
//         // document.querySelector('#number').textContent = number + 1; // 복합연산자라 문자열+1로 받아들임
//         document.querySelector('#number').textContent = ++number;
//     }
    
// }

//숫자 감소 함수
function decrement() {
    let number = document.querySelector('#number').textContent;

    if(number > 0) {
        // document.querySelector('#number').textContent = number + 1; // 복합연산자라 문자열+1로 받아들임
        document.querySelector('#number').textContent = --number;
    }
}






// let count = 0;
// function increment() {
//     let number1 = document.querySelector('#number').textContent;
//     let number = document.querySelector('#number');
//     number.innerHTML = ++number1;
    
// }