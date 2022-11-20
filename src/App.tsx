import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AllCards from './components/AllCards'
import YourCards from './components/YourCards'
import SelectedCard from './components/SelectedCard'
import ShoppingBasket from './components/ShoppingBasket'

function App() {

  return ( <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all-cards" element={<AllCards />}/>
        <Route path="/your-cards" element={<YourCards />}/>
        <Route path="/all-cards/:id" element={<SelectedCard />}/>
        <Route path="/shopping-basket" element={<ShoppingBasket/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
