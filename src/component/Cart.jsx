import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './cart.css';

const Cart = () => {
  const product = useSelector((state) => state.allProducts.product); 
  const cnNumber = useSelector((state) => state.count); 
 const [showErr,setShowErr]= useState(false);

    useEffect(()=>{

        const timeOut=setTimeout(()=>{
            setShowErr(true);
        },2000);


        return ()=>{
            clearTimeout(timeOut);
        }

    },[]);

 
  let total = 0;

  return (
    <div className='contain'>
         {  showErr && (<div className='cartErr' >
                Data from the API is unavailable. Thank you for visiting this site.
            </div>)
        }
      <table className='table'  style={{display: showErr ? 'none' : 'visible'}}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>


          {product.map((el, index) => {
            let Amount = cnNumber * el.price; 
            total += Amount; 

            return (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.title}</td>
                <td>{cnNumber}</td>
                <td>{Amount}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
