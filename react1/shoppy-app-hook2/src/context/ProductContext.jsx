import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState({});
    const [imgList, setImgList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <ProductContext.Provider value={{
            productList, setProductList,
            product, setProduct,
            imgList, setImgList,
            cartList, setCartList,
            totalPrice, setTotalPrice
        }}>
            {children}
        </ProductContext.Provider>
    );
}

