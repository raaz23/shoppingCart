import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link
import "./productComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);


  return (
    <div className="ui grid container">
      {products.map((product) => (
        <div key={product.id}  className="four column wide">
       
          <Link  to={`/product/${product.id}`} className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta">Price: ${product.price}</div>
                <div className="meta">Category: {product.category}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
