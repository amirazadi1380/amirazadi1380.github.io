import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Category from './components/Category'
import FooterNav from './components/FooterNav'
import Category2 from './components/category2'

function App() {

  return (
    <div>
      <Navbar/>
      <Products/>
      <Category/>
      <Category2/>
      <FooterNav/>
    </div>
  )
}

export default App
