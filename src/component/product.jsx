import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProduct } from '../redux/action';
import ProductComponent from './ProductComponent';
const Product = () => {
  const allProducts = useSelector((state) => state.allProducts.product);


  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        let result = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProduct(result.data)); 
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, [dispatch]);

  return (
   <>
   <ProductComponent /> 
   </>
      
  );
};

export default Product;
