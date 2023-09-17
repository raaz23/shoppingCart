import React from 'react';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './component/product';
import ProductDetail from './component/productDetail';
import Cart from './component/Cart';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          
          <Route exact path="/shoppingCart/" element={<Product/>}/>
               
          <Route exact path="/product/:productId" element={<ProductDetail/>}/>

          <Route exact path="/cart" element={<Cart/>}/>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
};
function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
