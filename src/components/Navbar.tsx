import React from 'react';
import { Link } from 'react-router-dom'
import basket from '../assets/basket.png'

function Navbar(){

  return (
    <>
    <header>
      <div className="nav">
        <div className="nav-links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/all-cards" className="link">
            All Cards
          </Link>
          <Link to="/your-cards" className="link">
            Your Cards
          </Link>
        </div>
        <Link to="/shopping-basket">
          <img src={basket} width="50px" />
        </Link>
      </div>
    </header>
    
    </>
  )
}

export default Navbar