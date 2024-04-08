import React from 'react';
import './contact.css';
import '../../assets/Data'
import data from '../../assets/Data';
import 'font-awesome/css/font-awesome.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faRedditAlien, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Contact() {

  const socialIcons = [faEnvelope, faGithub, faInstagramSquare, faRedditAlien, faLinkedin]

  const handleSocialLogoClick = (socialID) => {
    window.open(data.socials[socialID].home_page_link)
  }


  return (
    <>
      <div id="contact" className='container_header'>
        <h2>
          Contact
        </h2>
      </div>
      <div className='contact-container-flexBox' >
        <div className='contact-socials-flexbox'>
          {

            Object.keys(data.socials).map((ele, index) => {
              return (
                <div key={index} className='contact-socials-holder zoom' onClick={() => handleSocialLogoClick(ele)}>
                  <FontAwesomeIcon icon={socialIcons[index]} />
                </div>
              )
            })

          }
        </div>
      </div>
    </>
  )
}

export default Contact