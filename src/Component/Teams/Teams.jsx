import React from 'react'
import './Teams.css'
import team1 from '../../Assets/Images/team1.jpg'
import team2 from '../../Assets/Images/team2.jpg'
import team3 from '../../Assets/Images/team3.jpg'


const Teams = () => {
  return (
    <>
    <div className='team'>
        <div className='intro-1'>
            <h6 style={{color:"grey"}}>MEET OUR</h6>
            <h2>Our Team</h2>
            <h5 style={{color:"grey"}}>The member of our highly experienced team is dedicated to providing you</h5>
            <h5 style={{color:"grey"}}>with only the best service we can possibly provide.</h5>
        </div>
        <div className='intro-2'>
            <div className='intro-3'>
                <img src={team1} alt="" />
                <div className='name'>
                    <h3>Monica Garden</h3>
                    <h5 style={{color:"grey"}}>House Cleaning</h5>
                </div>
            </div>
            <div className='intro-3'>
                <img src={team2} alt="" />
                <div className='name'>
                    <h3>Laura Jones</h3>
                    <h5 style={{color:"grey"}}>Cleaner</h5>
                </div>
            </div>
            <div className='intro-3'>
                <img src={team3} alt="" />
                <div className='name'>
                    <h3>Sara Ryan</h3>
                    <h5 style={{color:"grey"}}>House Cleaner</h5>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Teams