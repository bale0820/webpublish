import { Layout } from './pages/Layout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import {Products} from './pages/Products.jsx';
import {Signup} from './pages/Signup.jsx';
import {Login} from './pages/Login.jsx';
import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/shoppy.css';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} ></Route>
      <Route path='/all' element={<Products />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/signup' element={<Signup />} ></Route>
      </Route>
    </Routes>
    
    </BrowserRouter>
  
  );
}


