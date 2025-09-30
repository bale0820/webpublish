import React from 'react';
import { addCartItem, updateCartCount, showCartItem, updateTotalPrice, updateCartItem, removeCartItem } from './cartSlice.js';
import { useDispatch } from 'react-redux';
import { axiosData } from '../../utils/dataFetch.js';

export const removeCart = (cid) => (dispatch) => {
    dispatch(removeCartItem({"cid" : cid}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
}
export const updateCart = (cid, type) => async (dispatch) => {
    dispatch(updateCartItem({ "cid": cid, "type": type })); //.수량변경
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
}

// const dispatch = useDispatch(); 여기서 호출안됨
export const addCart = (cartItem) => async (dispatch) => {
    dispatch(addCartItem({ "cartItem": cartItem })); //각각 독립적으로 실행
    dispatch(updateCartCount());
}

export const showCart = () => async (dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    dispatch(showCartItem({ "items": jsonData }))
    dispatch(updateTotalPrice());
    // setCartList(cartItemsAddInfo(jsonData, cartList));
    // setTotalPrice(getTotalPrice(jsonData, cartList));
}


