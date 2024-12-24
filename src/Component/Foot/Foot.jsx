import React from 'react'
import './Foot.css'
import Fooot from '../../Assets/Images/logoo.png'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Foot = () => {
  return (
    <>
    <div className='foot'>
        <div className='foot-1'>
            <div className='foot-3'>
            <div className='foot-7'>
                <img src={Fooot} alt="" />
            </div>    
            <div className='foot-8'>   
                <h6>Washla customers has a</h6>
                <h6>tremendous opportunity to answer</h6>
                <h6>the call of logistic.</h6>
            </div>
            </div>
            <div className='foot-4'>
                <div className='foot-9'>
                    <h2>Get In Touch</h2>
                </div>
                 <div className='foot-9'>
                    <h6>8723 NW 56th ST Miami, Florida, 3319</h6>
                    <h6>United States</h6>
                </div>
                 <div className='foot-9'>
                    <h6>info@arismo.com</h6>
                    <h6>052- 5410 3322</h6>
                </div>

            </div>
            <div className='foot-5'>
            <div className='foot-9'>
                    <h2>Get In Touch</h2>
            </div>
            <div className='foot-12'>
                <div className='foot-13'>
                    <h6>Home</h6>
                    <h6>About</h6>
                    <h6>Services</h6>
                    <h6>Team</h6>
                </div>
                <div className='foot-13'>
                    <h6>FAQ</h6>
                    <h6>Contact Us</h6>
                    <h6>Gallery</h6>
                    <h6>Blogs</h6>
                </div>
            </div>
            </div>
            <div className='foot-6'>
            <div className='foot-9'>
                    <h2>Get In Touch</h2>
            </div>
            <div className='foot-9'>
                    <h6>Subscribe to our newsletter to recieve the latest news about our services.</h6>
            </div>
            <div className='foot-11'>
                <input placeholder='Your email address' type="email" />
                <button><h5>SIGN UP</h5></button>
            </div>
            </div>
        </div>
        <div className='foot-2'>
            <div className='foot-14'>
                <h5>Ⓒ 2023 amiso all rights reserved.</h5>
            </div>
            <div className='foot-15'>
                <h4><FaFacebookF /></h4>
                <h4><FaTwitter  /></h4>
                <h4><FaInstagram  /></h4>
                <h4><FaLinkedinIn  /></h4>                
            </div>

        </div>

    </div>
    </>
  )
}

export default Foot