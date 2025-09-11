import { useState, useEffect } from "react";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductContent } from "./shared/BestProductContent.jsx";
// import { BestProductImage } from "./shared/BestProductImage.jsx";
import { fetchData } from "./util/commonData.js";

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct() {
    const [cartCount, setCartCount] = useState(0);
    const [bestProductList, setBestProductList] = useState([]);
    const handleCartCount = () => {
        setCartCount(cartCount + 1);
    }

    //컴포넌트 호출 시 데이터 로딩, 비동기 처리 --> useEffect Hooks 함수
    // useEffect내용을 저장할려면 일반 변수말고 훅을 써서 저장해야한다 저장공간이 다르다
    useEffect(() => {
        // fetch("/data/best_products.json") //네트워크를 통해서 가져온다 로컬호스트로
        // .then((response) => response.json())
        // .then(jsonData => setBestProductList(jsonData))
        // .catch((error) => console.log(error));
        const fetch = async() => {
            const result = await fetchData("/data/best_products.json");
            console.log('result==>',result);
            setBestProductList(result);
        }
        fetch();
    }, []);
    return (
        <>
            <h2>베스트 상품 - 🛒({cartCount})</h2>
            <ul className="best-product">
                {bestProductList.map((product, index) =>
                    (index === 0) ?
                        <li key={index}><BestProductImage
                            img={product.img}
                            style={{ width: "400px", height: "600px" }}
                            rank={product.rank}
                            like={product.like}
                            cartCount={handleCartCount}
                            icon="🛒"
                        /></li>
                        : <li key={index}><BestProductItem item={product}
                            cartCount={handleCartCount}
                        /></li>

                )}
            </ul>

        </>
    );
}




/**
 * 베스트 상품 컴포넌트
 */
export function BestProductItem({ item, cartCount }) {

    return (
        <div>
            <BestProductImage img={item.img}
                style={{ width: "200px", height: "220px" }}
                rank={item.rank}
                like={item.like}
                icon={item.icon}
                icon_style={item.icon_style}
                cartCount={cartCount}
            />
            <BestProductContent
                title={item.title}
                sale={item.sale}
                price={item.price}
                like={item.like}
                icon={item.icon}
            />
        </div>
    );
}









