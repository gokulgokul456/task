import React from 'react'
import './Count.css'
import play from '../../Assets/Images/play.png'
import Countup from 'react-countup'
import { IoMdHappy } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { CiGlass } from "react-icons/ci";
import VisibilitySensor from 'react-visibility-sensor';





const Count = () => {
  return (
    <>
    <div className='counts'>
        <div className='count-1'>
            <img style={{width2:"55px",height:"55px"}} src={play} alt="" />
            <h6 style={{color:"white"}}>Cleaning ypur Worrire Away</h6>
            <h3 style={{color:"white"}}>Need Help With Cleaning?</h3>
            <button>Request Call back</button>
        </div>
        <div className='count-2'>
            <div className='count-3'>
                <div className='count-4'>
                <span style={{fontSize:40,color:"rgb(68,172,217)"}}><IoMdHappy /></span>
                </div>
                <div className='count-5'>
                <h2><Countup start={0} end={385} duration={2} delay={0}  /></h2>
               
                <h6 style={{color:"grey"}}>Happy Customer</h6>
                </div>
            </div>
            <div className='count-3'>
                <div className='count-4'>
                <span style={{fontSize:40,color:"rgb(68,172,217)"}}><FaHome /></span>
                </div>
                <div className='count-5'>
                <h2><Countup start={0} end={842} duration={2} delay={0} /></h2>
                <h6 style={{color:"grey"}}>Happy Cleaned</h6>
                </div>
            </div>
            <div className='count-3'>
                <div className='count-4'>
                <span style={{fontSize:40,color:"rgb(68,172,217)"}}><LiaAwardSolid /></span>
                </div>
                <div className='count-5'>
                <h2><Countup start={0} end={489} duration={2} delay={0} /></h2>
                <h6 style={{color:"grey"}}>Award Recived</h6>
                </div>
            </div>
            <div className='count-3'>
                <div className='count-4'>
                <span style={{fontSize:40,color:"rgb(68,172,217)"}}><CiGlass /></span>
                </div>
                <div className='count-5'>
                <h2><Countup start={0} end={1344} duration={2} delay={0} /></h2>
                <h6 style={{color:"grey"}}>Glass Cleaned</h6>
                </div>
            </div>
            



        </div>
    </div>

    </>
  )
}

export default Count