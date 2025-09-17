import { useState, useEffect } from "react";

export function Counter({ click, total, init}) {  
    const [number, setNumber] = useState(0);
  

    //useEffect : Counter 컴포넌트 로딩 시 최초에 처음 실행되는 함수
    //useEffect(callback, dependencies);
    //값이 변경될 때마다 재호출
    useEffect(() => {
        setNumber(0);
        
    }, [init]);



    const handleClickIncrement = () => {
        // total= total+1;
        // console.log(`click~~ ${total}`);
        if (number < 10) {
            setNumber(number + 1);
            click("+"); //부모에게 number 전달
        } else setNumber(number);
    }
    const handleClickDecrement = () => {
        // total= total+1;
        // console.log(`click~~ ${total}`);
        if (number > 0) {
            setNumber(number - 1);
            click("-");
            

        }else setNumber(number);

        
    }
    const handleClickInit = () => {
        // total= total+1;
        // console.log(`click~~ ${total}`);
        // setNumber(0);
        click(0); // 부모의 click클릭 함수 호출
    }



    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button type="button" onClick={handleClickDecrement}>-(감소)</button>
                <button type="button" onClick={handleClickIncrement}>+(증가)</button>
                <button type="button" onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    );
}