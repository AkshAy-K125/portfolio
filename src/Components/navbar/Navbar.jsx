import React, { useState, useEffect } from 'react'
import './navbar.css'
import { getResumeID } from '../../util';

const Navbar = () => {

  const [sidePanel, setSidePanel] = useState(false)
  const [resumeID, setResumeID] = useState(null)

  useEffect(() => {
    getResumeID().then(id => setResumeID(id))
    console.log(resumeID)

  }, [resumeID])

  const resumeDownload = () => {
    window.open(`https://drive.google.com/file/d/${resumeID}/view?usp=sharing`)
  }

  return (
    <>
      <div className='nav_Container'>
        <div className='navBar'>
          <ul className='nav_items'>
            <li className='hover-underline-animation'><a href="#home">Home</a></li>
            <li className='hover-underline-animation'><a href="#About">About</a></li>
            <li className='hover-underline-animation'><a href="#contact">Contact</a></li>
            <li className='hover-underline-animation'><a href="#home" onClick={resumeDownload}>Resume</a></li>
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