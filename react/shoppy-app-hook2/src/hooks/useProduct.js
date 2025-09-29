import React, { createContext, useContext } from 'react';
import { ProductContext } from '../context/ProductContext.jsx';
import { axiosData, groupByRows } from '../utils/dataFetch.js';
import { cartItemsAddInfo, getTotalPrice } from '../utils/cart.js';

export function useProduct() {
    const { setProductList, productList, setProduct, setImgList, setCartList, setTotalPrice } = useContext(ProductContext);

    const createProductList = (number) => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setProductList(rows);
        }
        load();
    }

    const filterProduct = (pid) => {
        const filterData = async () => {
            // const jsonData = await axiosData("/data/products.json");
            const [filterProduct] = await productList.flat().filter((item) => item.pid === pid);
            console.log(productList);
            
            console.log('안뇽',filterProduct);
            
            setProduct(filterProduct);
            setImgList(filterProduct.imgList);
        }
        filterData();
    }

    const cartProduct = (items) => {
         const fetch = async() => {
                    // const jsonData = await axiosData("/data/products.json");
                    setCartList(cartItemsAddInfo(productList.flat(), items));
                    setTotalPrice(getTotalPrice(productList.flat(), items));
                }
                fetch();
    }


    return { createProductList, filterProduct, cartProduct };

}

