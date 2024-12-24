import React from 'react'
import './Blogs.css'
import laundry from '../../Assets/Images/dre.jpg'
import { TbWashTemperature5 } from "react-icons/tb";
import { MdDryCleaning } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { PiWashingMachineBold } from "react-icons/pi";
import { TbWashHand } from "react-icons/tb";

const Blogs = () => {
  return (
    <>
    <div className='laundry'>
        <div className='laundry-1'>
            <div className='laund-1'>
                <img src={laundry} alt="" />
            </div>
             <div className='laund-2'>
                <div className='laund-3'>
                    <h6 style={{color:"grey"}}>MAID FOR YOU</h6>
                    <h2>A Cleaner place is a Safer PLace.</h2>
                    <h5 style={{color:"grey"}}>Washla cleaning service. We are a company dedicated to giving customers back the</h5>
                    <h5 style={{color:"grey"}}>time they deserve to enjoy the things they love.</h5>
                </div>
                 <div className='laund-4'>
                    <div className='laund-5'>
                        <span style={{fontSize:50,color:"rgb(4,179,248)"}}><TbWashTemperature5 /></span>
                        <h3>Professional Cleaning</h3>
                        <h6 style={{color:"grey"}}>Housekeeping is respnsible for minor</h6>
                        <h6 style={{color:"grey"}}>security in hotel.</h6>
                    </div>
                    <div className='laund-5'>
                        <span style={{fontSize:50,color:"rgb(4,179,248)"}}><MdDryCleaning  /></span>
                        <h3>Fast and efficient</h3>
                        <h6 style={{color:"grey"}}>Both us take a lot of time in getting</h6>
                        <h6 style={{color:"grey"}}>cleaned Clean Home.</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='laundry-2'>
            <div className='laund-6'>
            <h6 style={{color:"white"}}>WHY CHOOSE US</h6>
            <h1>Our Great Services</h1>
            <h6 style={{color:"white"}}>Restoring the beauty and freshness of all your upholstered fabrics and take</h6>
            <h6 style={{color:"white"}}>the workout of housework for you.</h6>
            </div>
            <div className='laund-7'>
                <div className='cleaning'>
                    <span style={{fontSize:50,color:"white"}}><GiVacuumCleaner /></span>
                    <h3 style={{color:"white"}}>Home Cleaning</h3>
                    <h6 style={{color:"white"}}>Homes and throughly launder them</h6>
                    <h6 style={{color:"white"}}>between usage, We give our teams the</h6>
                    <h6 style={{color:"white"}}>accusantium doloremque laundation. </h6>
                </div>
                <div className='cleaning'>
                    <span style={{fontSize:50,color:"white"}}><PiWashingMachineBold  /></span>
                    <h3 style={{color:"white"}}>Windows Cleaning</h3>
                    <h6 style={{color:"white"}}>We are closely monitoring national, state</h6>
                    <h6 style={{color:"white"}}>and local health agnecies for the most</h6>
                    <h6 style={{color:"white"}}>recent developments</h6>
                </div>
                <div className='cleaning'>
                    <span style={{fontSize:50,color:"white"}}><TbWashHand  /></span>
                    <h3 style={{color:"white"}}>Office Cleaning</h3>
                    <h6 style={{color:"white"}}>Follow these tips from the CDC to help</h6>
                    <h6 style={{color:"white"}}>prevent the spread of the seasonal flu and</h6>
                    <h6 style={{color:"white"}}>respiratory diseases.</h6>
                </div>
            </div>

        </div>
    </div>

    </>
  )
}

export default Blogs