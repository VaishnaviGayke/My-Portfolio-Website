import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_about.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" className='profile-img' />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am Vaishnavi Gayke, a Computer Science graduate student at Binghamton University (SUNY) experience in Software, Web, Cloud and Machine Learning.</p>
                <p>Currently, I’m eager to apply my expertise to craft impactful solutions that accelerate organization’s growth.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python, Java, C++</p><hr style={{width:"900%"}} /></div>
                <div className="about-skill"><p>AWS, Microsoft Azure</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS, Node JS & JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p> SQL, PL/SQL</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>MySQL, Oracle, PostgreSQL, MongoDB </p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Docker, Kuberentes, Terraform, Jenkins </p><hr style={{width:"70%"}} /></div>
                
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2x</h1>
            <p>HACKATHONS WON</p>
        </div>
        <hr />
        <div className="about-achievement">
          <a href="https://ijarsct.co.in/Paper10625.pdf" target="_blank" rel="noopener noreferrer" className="achievement-link">
            <h1>1x</h1>
            <p>PAPER PUBLISHED</p>
          </a>
        </div>
        <hr />
        <div className="about-achievement">
          <a href="https://medium.com/@vaishnavipgayke2120" target="_blank" rel="noopener noreferrer" className="achievement-link">
            <h1>3+</h1>
            <p>TECH BLOGS</p>
            <p>ON MEDIUM</p>
          </a>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
