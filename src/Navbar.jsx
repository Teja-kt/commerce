import React from 'react'
import "./Navbar.css"
import Cart from './Cart'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>STore</h1>
        </div>
        <Cart/>
    </div>
  )
}

export default Navbar