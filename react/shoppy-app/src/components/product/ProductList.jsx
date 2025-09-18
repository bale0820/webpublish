import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';
export function ProductList() {
    const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3);
    // useEffect(() => {
    //     axios.get("http://localhost:3000/data/products.json")
    //         .then((res) => setList(res.data))
    //         .catch((err) => console.error(err));
    // }, []);

    useEffect(() => {
        // fetchData("/data/products.json")
        // .then((res) => setList(res) );

        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }, [number]);


    //출력 포맷 함수 : 한줄에 상품 3개씩 출력
    // const rows = []; // [[{},{},{}],[{},{},{}],[{}]]
    // for(let i=0;i < list.length;i+=3) {
    //     // const row = list.slice(i, i+3); //0~2 slice 새로운 배열 반환
    //     rows.push(list.slice(i, i+3));
    // }
    return (
        <div >
            {rows && rows.map((rowArray, idx) =>
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product, idx) =>
                        <ProductAvatar img={product.image} ket={idx}/>
                    )}
                </div>
            )}
        </div>
    );
}

