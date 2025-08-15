import React from 'react'
import './education.css'

function Education() {
  return (
    <div className='education'>
        <img src="./psu.jpg" alt="Penn State Campus" />
        <div className='header'>
            <h1>The Pennsylvania State University</h1>
            <h2>Penn State College of Engineering</h2>
            <h3>2021 - 2025</h3>
        </div>
        <div className="cards-container">
        <div className="card">
          <h4>Bachelor of Science</h4>
          <p>Computer Science</p>
          <img src="./diploma.webp" alt="diploma" />
        </div>
        <div className="card">
          <h4>Minor</h4>
          <p>Mathematics</p>
          <img src="./minor_diploma.jpg" alt="" />
        </div>
        <div className="card">
          <h3>GPA</h3>
          <p>3.85 / 4.00</p>
        </div>
        <div className="card">
          <h4>Clubs</h4>
          <p>Penn State ACM, HackPSU, AI Society</p>
        </div>
      </div>
    </div>
  )
}

export default Education