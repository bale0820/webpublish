/**
 * fetch() : 데이터(JSON, ..) 파일을 호출하여 데이터를 가져오는 함수
 */
//최초로 호출되는 함수 : Window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function () {
    showResult();
})

//data.json 데이터 가져오기
async function getData() {
    let response = await fetch("./data.json");
    return response.json();
}
async function showResult() {
    let data = await getData();
    let output = `
        <h1>Fetch 함수 테스트</h1>  
        <table border=1>
        <tr>
            <th>Name</th>
            <th>Name</th>  
            <th>Name</th>  
        </tr>
        ${data.map(item => `
                <tr>
            <th>${item.name}</th>
            <th>${item.age}</th>  
            <th>${item.address}</th>  
            </tr>
            `
    ).join()
        }
        </table>  
    `;

    console.log(output);


    document.querySelector("#content").innerHTML = output;

}