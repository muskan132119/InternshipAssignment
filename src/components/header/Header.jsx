import React from 'react'
import './Header.scss'
const Header = () => {
  return (    
      <div className="navbar">
        <div className="navbar-left">
          <a href="logoipsum">logoipsum</a>
          <a href="Solution">Solution</a>
          <a href="Features">Features</a>
          <a href="Blog">Blog</a>
          <a href="About">About</a>
        </div>
        <div className="navbar-right">
          <div className='btn1'>Login</div>
          <div className='btn2'>Register</div>
        </div>
      </div>
  )
}

export default Header