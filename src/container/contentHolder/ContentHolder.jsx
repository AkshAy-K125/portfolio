import React from 'react';
import './contentHolder.css'
import data from '../../assets/Data';

import { Content, Skills, Projects } from '../../Components';
import { Zoom } from "react-awesome-reveal";

function ContentHolder() {
  return (
    <>
      <div id="About" className='content_container'>
        <div className='container_header'>
          <h2>
            About
          </h2>
        </div>
        <div className='content_container-flexBox'>
          <div className='company_content'>
            {
              Object.keys(data.companies).map((ele, index) => {
                return (
                  <Zoom key={"c" + ele} triggerOnce='true'>
                    < Content key={"c" + index} company={data.companies[ele]} />
                  </Zoom>
                )
              })
            }
          </div>
          <div className='skills-container'>
            {
              Object.keys(data.skills).map((ele, index) => {
                return (
                  <Zoom key={"c" + ele} triggerOnce='true'>
                    < Skills key={"s" + index} skill={data.skills[ele]} />
                  </Zoom>
                )
              })

            }
          </div>
        </div>
      </div>
      <div id="Projects" className='projects_container'>
        {
          Object.keys(data.projects).map((ele, index) => {
            return (
              <Zoom key={"p" + ele} triggerOnce='true'>
                <Projects key={"p" + index} project={data.projects[ele]} />
              </Zoom>
            )
          })
        }
      </div>
    </>
  )
}

export default ContentHolder