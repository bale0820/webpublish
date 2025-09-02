//최초로 호출되는 함수 : Window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function() {
    initForm();
}) 

// function counter(count) {
//      let number = document.querySelector('#number').textContent;
//     if(count === 'increment') {
//          if(number >= 0) {
//         // document.querySelector('#number').textContent = number + 1; // 복합연산자라 문자열+1로 받아들임
//         document.querySelector('#number').textContent = ++number;
//     }
//     } else {
//          if(number > 0) {
//         // document.querySelector('#number').textContent = number + 1; // 복합연산자라 문자열+1로 받아들임
//         document.querySelector('#number').textContent = --number;
//     }

//     }
// }

//화면 폼 함수
function initForm() {
    let output = `
     <h1>Counter</h1>
    <div>
        <h3 id="number">0</h3>
        <button type="button" class="button" data-operation="increment">increment(+)</button>
        <button type="button" class="button" data-operation="decrement">decrement(-)</button>
    </div>
    
    `;
    //innerHtml은 태그까지도 가져오지만 textContent는 문자열만 가져온다
    document.querySelector('#content').innerHTML = output;

    //버튼 이벤트 적용
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector('#number').textContent;
            let type = button.dataset.operation;
            if(type === 'increment') {
                if(number >= 0) document.querySelector('#number').textContent = ++number;
            } else {
                 if(number >= 0) document.querySelector('#number').textContent = --number;
            }
        })
    });

}