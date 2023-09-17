import React from 'react'
import { Link } from 'react-router-dom'



const navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{position:'fixed', width:'100vw',zIndex:'10'}}>
    <div className="container-fluid">
    <Link to="/shoppingCart/" className="navbar-brand" style={{ letterSpacing: '2px' }}>RAAZVEER Store</Link>
    <Link to="/cart" className="store" style={{ letterSpacing: '2px' }}><img src='https://www.pngall.com/wp-content/uploads/5/Red-Shopping-Cart-PNG-Photo.png' style={{ width: '2.5rem', height:'2rem'}}></img></Link>

    </div>
  </nav>
  )
}

export default navbar