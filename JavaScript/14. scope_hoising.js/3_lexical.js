/**
 * “lexical”은 코드를 작성한 위치(문맥) 라는 뜻이고, JS에서 흔히 말하는 건 Lexical Scope → 함수가 정의된 위치에 따라 스코프가 결정되는 성질이에요.
 */
{
    const a = 1; //전역 변수  
    const b = 100;  
    console.log(a);
    
    {
        const a = 2; //지역 변수
         console.log(a);

         {
            const a = 3;
            const c = 1000;
            console.log(a);
            console.log(b);
            
         }
         console.log(c);
         
    }

}