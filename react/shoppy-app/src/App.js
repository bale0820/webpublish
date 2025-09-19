import { Layout } from './pages/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import {Products} from './pages/Products.jsx';
import {Signup} from './pages/Signup.jsx';
import {Login} from './pages/Login.jsx';
import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/shoppy.css';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { Cart } from './pages/Cart.jsx';
import {  useState } from 'react';
import {cartItemsCheck} from './utils/cart.js';
export default function App() {
  //1. 장바구니 수량 관리 : setCartCount
  const [cartCount, setCartCount] = useState(0);
  //2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]); 


  // const addCart = (cartItem) => {
  //   //pid, size가 동일한 경우 qty 증가, 기존에 없는 경우 새로 추가
  //     setCartCount(cartCount + 1);
  //       const exists = cartItems.some(
  //   (item) => item.pid === cartItem.pid
  // );
  // if(exists) {
  //   const datas = cartItems.map((item) => item.pid === cartItem.pid ? {...item, qty : item.qty + 1} : item)
  //   setCartItems(datas);
  // } else {
  //   setCartItems([...cartItems, cartItem]);
  // }
  //     // setCartItems([...cartItems, cartItem]);
  //  };


  const addCart = (cartItem) => { //<-- ProductDetail 쇼핑백 추가 이벤트 처리
      setCartItems(cartItemsCheck(cartItems, cartItem));
      setCartCount(cartCount + 1);
}

   console.log(cartItems, cartCount);
   

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout cartCount={cartCount} />}>
      <Route index element={<Home />} ></Route>
      <Route path='/all' element={<Products />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/signup' element={<Signup />} ></Route>
       <Route path='/cart' element={<Cart />} ></Route>
       <Route path='/products/:pid' element={<ProductDetail addCart={addCart} />} ></Route>
      {/* //pathvariable 경로변수 */}
      </Route>
    </Routes>
    
    </BrowserRouter>
  
  );
}


