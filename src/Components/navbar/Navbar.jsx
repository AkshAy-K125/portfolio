import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [sidePanel, setSidePanel] = useState(false)

  return (
    <>
      <div className='nav_Container'>
        <div className='navBar'>
          <ul className='nav_items'>
            <li className='hover-underline-animation'><a href="#home">Home</a></li>
            <li className='hover-underline-animation'><a href="#About">About</a></li>
            <li className='hover-underline-animation'><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='burger_Container'>
        <div className='burger'>
          <button onClick={() => setSidePanel(true)}>
            <hr></hr>
            <hr></hr>
            <hr></hr>
          </button>
        </div>
        {
          sidePanel &&
          <div className='burger_navBar'>
            <div className='sidePanelFlexContent'>
              <div>
                <button onClick={() => setSidePanel(false)} className='sideButtonClose'>
                  X
                </button>
              </div>
              <div>
                <ul className='burger_nav_items'>
                  <li className='hover-underline-animation'><a href="#home" onClick={() => setSidePanel(false)}>Home</a></li>
                  <li className='hover-underline-animation'><a href="#About" onClick={() => setSidePanel(false)}>About</a></li>
                  <li className='hover-underline-animation'><a href="#contact" onClick={() => setSidePanel(false)}>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Navbar