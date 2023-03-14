import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom'
import basket from '../assets/basket.png'
import logo from '../assets/yugioh-logo.png'

function Navbar(){

  // ! Burger dropdown
  function handleBurger(e: SyntheticEvent){
    const dropDown: HTMLElement | null = document.querySelector("div .navbar-menu")
    e.currentTarget.classList.toggle("is-active")
    if(!dropDown) return
    dropDown.classList.toggle("is-active")
  }

  // ! Search bar
  function handleSearchBtn(e: SyntheticEvent){
    e.preventDefault()
  }

  const viewPortWidth = window.innerWidth

  if(viewPortWidth <= 455){
    console.log("true")
  }

  return (
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="home" />
            </Link>
          <a onClick={handleBurger} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/all-cards" className="navbar-item">
              All Cards
            </Link>
            <Link to="/your-cards" className="navbar-item">
              Your Cards
            </Link>
            <Link to="/your-cards" className="navbar-item">
              About
            </Link>
              <form action="get/replace/later" className="navbar-item">
                <fieldset>
                  <input type="text" className="nav-search-bar" placeholder="Find a card"/>
                  <input onClick={handleSearchBtn}type="submit" className="nav-search-btn"/>
                </fieldset>
              </form>
          </div>
          <div className="navbar-end">
            <Link to="/login" className="navbar-item">
                Login
            </Link>
            <Link to="/register" className="navbar-item">
                Register
            </Link>
            <Link to="/shopping-basket" className="navbar-item">
                <img src={basket} alt="basket icon"/>
            </Link>
          </div>
        </div>
      </nav>
  )
}

export default Navbar