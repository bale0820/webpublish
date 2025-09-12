import { useEffect, useRef, useState } from "react";
import { fetchKobisAPI } from "../../util/commonData.js";
import { searchMoviePoster } from "../../util/commonData.js";
import { BestProductImage } from "./BestProductImage.jsx";
import { BestProductItem } from "../BestProduct.jsx";


//usestate는 두번째 시도시 첫번째 setList에 대한 게 렌더링진행중인데 거기서
// 두번째 기다리고있는거를 들어올거라고 착각해 중간상태가 생겨 에러가남
// 스트릭모드시 에러가 안나는이유는 두번째 마운트시 usestate값이 저장되기때문이다.
export function Boxoffice() {
    const [list, setList] = useState([]);
    const hasRun = useRef(false);
    


    //언디파인드로 css적용시 무시됨
    useEffect(() => {
        if(!hasRun.current) {
            const fetchKobis = async () => {
                const kobis = await fetchKobisAPI("20250910");
                // console.log(boxofficeList);
                // boxofficeList.map(); 바로바로 업데이트라 지금상황에서 ㄴㄴ
                const mList = kobis.boxOfficeResult.dailyBoxOfficeList;
                console.log(mList);
    
                for (const movie of mList) {
                    if (movie.rank !== "10") { //API는 무조건 문자열
                        const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                        const posterObj = {
                            "img": poster,
                            "rank": movie.rank,
                            "title": movie.movieNm,
                            "like" : true,
                            "icon" : "❤",
                            "style" : {"width" : "600px", "height" : "800px"},
                            "icon_style" : {
                                                "bg" : "coral", 
                                                "color" : "#fff",
                                                "radius" : "0",
                                                "width" : "40px",
                                                "height" : "40px" 
                                            }
                        }
                        setList(prev => [...prev, posterObj]); //2 - prev(현재의 list) : [{0}, {1}]
                    }
                }
            }
            fetchKobis();
            hasRun.current = true;
        }

    }, []);

    return (
        <>
            <h2>박스오피스</h2>
            <ul className="best-product">
                {list.map((item, index) =>
                    
                    (index === 0) ?
                    <li key={index}><BestProductImage
                    img={item.img}
                    style={item.style}
                    rank={item.rank}
                    like={item.like}
                    icon={item.icon}
                    icon_style={item.icon_style}
                    /></li>
                        : <li key={index}><BestProductItem item={item}
                        /></li>

                )}
            </ul>
        </>
    );
}