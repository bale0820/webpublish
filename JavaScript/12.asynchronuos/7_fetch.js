/**
 * fetch() : 데이터(JSON, ..) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초로 호출되는 함수 : Window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function () {
    showResult();
})


// function getJson() {
//     fetch("./data.json")
//         .then((response) => response.json()) //response중에 body본문을 객체로 바꾼다
//         .then((jsondata) => {
//             // console.log(JSON.stringify(jsondata));
//             let jsonData2 = JSON.stringify(jsondata);
//               console.log(jsonData2);
//             let jsonData3 = JSON.parse(jsonData2);
//               jsonData3.forEach((obj) => {
//                 console.log(obj.name, obj.age, obj.job);
//               });  
//         })
//         .catch((error) => console.log(error));

// }
// 부트스트랩, 스와이퍼
async function getJson() { //promise는 await 붙일 수 있다
    let response = await fetch("./data.json");
    console.log(response);
    return response.json();
}


async function showResult() {
    //1. getJson() 결과 가져오기
    let data = await getJson();
    console.log(data);

    //2. output 변수에 html 코드 저장
    let output = `
      <table border=1>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
        </tr>
            ${  
                //forEach는 안됨 브라우저에서 지원 x
                //for..of 
                //map()
                data.map((item) => `
                     <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.job}</td>
                     </tr>
                `).join()
        }
      </table>
    `;
    console.log(output);
    
    //3. innerHTML로 output 출력
    document.querySelector('#content').innerHTML = output;
    // document.querySelector('#name').innerHTML = data[0].name;
    // document.querySelector('#age').innerHTML = data[0].age;
    // document.querySelector('#job').innerHTML = data[0].job;


}