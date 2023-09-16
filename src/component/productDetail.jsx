import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeProduct, CountNumber } from '../redux/action';
import  { useParams } from 'react-router-dom';
import "./ProductDetail.css"


const ProductDetail = () => {
  const {productId}=useParams();

  const singleProduct=useSelector((state)=> state.productSelected);
  
  const dispatch=useDispatch()


//************************************** */

  let [count, setCount]=useState(0);

  const countNum=useSelector((state)=> state.count);

  let [AddCart, setAddCart]=useState(false);


  const increase = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      dispatch(CountNumber(newCount));
      return newCount;
    });
  };
  
  const decrease = () => {
    if (count > 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        dispatch(CountNumber(newCount));
        return newCount;
      });
    }
  };



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(selectedProduct(response.data));

      } catch (error) {
        console.error("Error in ProductDetail:", error);
      }
    };
  
    fetchProduct();
    return () => {
      dispatch(removeProduct());
    };
  }, [dispatch, productId]);

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
  <> { singleProduct ? (

  <div className='container'>
   
      <div className='actual-card'>
        <div className='image-part'>
          <img src={singleProduct.image} alt={singleProduct.title} />
          <div className='title'>{singleProduct.title}</div>
        </div>
        <div className='content-part'>
          <div className='price'>{`$ ${singleProduct.price}`}</div>
          <div className='categories'>{singleProduct.category}</div>
          <div className='description'>
            <p>{singleProduct.description}</p>
            <div className='add to Cart'><button className='addToCart' onClick={()=>{
                if(count>0)
                {
                  setAddCart(true);
                }
            }}   style={ { background: count>0 ? (AddCart ? '#ff9f43' : '#0056b3' ) : ''}}>{(AddCart  && count>0) ? "Added": "Add to Cart" }</button>
            <div className='idic'><button className='inc' onClick={decrease}>-</button>
            <p>{count}</p>
            <button className='dec' onClick={increase}>+</button></div>
            

            </div>
          </div>
        </div>
    </div>
  </div>
) : (<span className='loading'><img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952yl4me7uzgu8tg4pe3qxom2cx1pjxez583pfn1ruj&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" /></span>)
}

  </>
  );
};

export default ProductDetail;
