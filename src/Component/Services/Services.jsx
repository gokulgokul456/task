import React from 'react'
import './Services.css'
import { FaPerson } from "react-icons/fa6";
import { TbClock24 } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";




const Services = () => {
  return (
    <>
    <div className='pros'>
        <div className='pros-1'>
            <h6 style={{color:"grey"}}>WHY CHOOSE US</h6>
            <h1>Tradition of Trust</h1>
            <h6 style={{color:"grey"}}>We Specialise in intelligent & effective Search and belives in the power of</h6>
            <h6 style={{color:"grey"}}>partnerships to grow business.</h6>
        </div>
        <div className='pros-2'>
            <div className='pros-3'>
                <div className='round'>
                    <span style={{fontSize:50,color:"rgb(4,179,248)"}}><FaPerson /></span>
                </div>
                <h4>Professional Team</h4>
                <h6>Our team users a sanitizing solution to</h6>
                <h6>wipe down light switches doorknobs.</h6>
            </div>
            <div className='pros-3'>
                <div className='round'>
                <span style={{fontSize:50,color:"rgb(4,179,248)"}}><TbClock24  /></span>
                </div>
                <h4>24/7 Services</h4>
                <h6>We encourage our customer to let us</h6>
                <h6>know in advance of an appoiment</h6>
            </div>
            <div className='pros-3'>
                <div className='round'>
                  <span style={{fontSize:50,color:"rgb(4,179,248)"}}><MdOutlineVerified   /></span>
                </div>
                <h4>Service Gaurantee</h4>
                <h6>We are telling out team members to</h6>
                <h6>switch out all cleaning cloths and mopheads</h6>
            </div>
        </div>
    </div>

    

    </>
  )
}

export default Services