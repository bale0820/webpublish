import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';
import { useProduct } from '../../hooks/useProduct.js';
import { ProductContext } from '../../context/ProductContext.jsx';

export function ProductList() {
    const {createProductList} =  useProduct();
    // const [rows, setRows] = useState([]);
    const [number, setNumber] = useState(3);
    const {productList} = useContext(ProductContext);

    useEffect(()=>{  
       createProductList(number);
    }, [number]);
   
    
    return (
        <div>
                {productList && productList.map((rowArray, idx) => 
                    <div className='product-list' key={idx} >
                        {rowArray && rowArray.map((product, idx) =>
                            <Link to={`/products/${product.pid}`}>
                                <ProductAvatar img={product.image} key={idx} />  
                            </Link>                          
                        )}
                    </div>
                 )}
        </div>
    );
}

