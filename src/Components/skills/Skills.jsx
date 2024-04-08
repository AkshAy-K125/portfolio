import React from 'react'
import './skills.css'

function Skills({ skill }) {

  const logoHolderCliskHandler = (skillHomepage) => {
    window.open(skillHomepage)
  }


  return (
    <div className='skills_logo-holder zoom' onClick={() => logoHolderCliskHandler(skill.home_page_link)}>
      <img className='zoom' src={require("../../assets/skills/" + (skill.name) + ".png")} alt='img' />
    </div>
  )
}

export default Skills