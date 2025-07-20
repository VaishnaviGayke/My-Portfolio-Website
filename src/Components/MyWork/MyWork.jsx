import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <div className="mywork-content">
                <a href={work.w_url} target="_blank" rel="noopener noreferrer">
                  <img src={work.w_img} alt={work.w_name} />
                  <h3 className="mywork-name">{work.w_name}</h3>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Show more" />
      </div> */}
      <a
       href="https://github.com/VaishnaviGayke"
       target="_blank"
       rel="noopener noreferrer"
      className="mywork-showmore"
        >
       <p>Show More</p>
       <img src={arrow_icon} alt="Show more" />
     </a>
    </div>
  )
}

export default MyWork;
