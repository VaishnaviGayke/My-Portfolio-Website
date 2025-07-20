import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import resume from '../../assets/Vaishnavi_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Vaishnavi Gayke,</span> Software/Full-Stack Developer based in USA.</h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
