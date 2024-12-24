import React from 'react'
import './Landing.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import logo from '../../Assets/Images/logoo.png'
import Swiper from '../Swiper/Swipe';
import { MdBackHand } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";


const Landing = () => {
  return (
    <>
    <div className='bgcolor'>
    <div className='Bg'>
        <div className='contact'>
         <div className='cont-1'>
                <h6><FaPhoneAlt />  +123-456-7890</h6>
                <h6><IoIosMail  />  info@yourdomain.com</h6>
        </div>
        <div className='cont-2'>
                <div className='cont-3'>
                <h4><FaFacebookF /></h4>
                <h4><FaTwitter  /></h4>
                <h4><FaInstagram  /></h4>
                <h4><FaLinkedinIn  /></h4>
        </div>
        <div className='cont-4'>
                <div className='btn'>
                <h4><FaCalculator /></h4>
                <h6>GET A QUOTE</h6>
        </div>
        </div>
        </div>
        </div>

        <div className='Navbar'>
            <div className='Nav-1'>
                <img src={logo} alt="" />
            </div>
            <div className='Nav-2'>
                <h6>HOME</h6>
                <h6>ABOUT</h6>
                <h6>PAGES</h6>
                <h6>GALLERY</h6>
                <h6>BLOG</h6>
                <h6>CONTACT</h6>
            </div>
        </div>
        <div className='swipp'>
                <Swiper/>
        </div>
        <div className='details'>
        <div className='details-1'>
            <div className='det-1'>
                <span style={{fontSize:30,color:"rgb(89,193,234)"}}><MdBackHand /></span>
                <h5 style={{fontSize:15}}>Professional Cleaning</h5>
                <h6 style={{color:"grey",lineHeight:"2"}}>Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.</h6>
            </div>
            <div className='det-2'>
                <span style={{fontSize:30,color:"rgb(89,193,234)"}}><MdCleaningServices  /></span>
                <h5 style={{fontSize:15}}>Fast and efficient</h5>
                <h6 style={{color:"grey",lineHeight:"2"}}>Our Aim is to kept the house Clean your Aim Will Help! the through Digital Innovation World Summit.</h6>
            </div>
            <div className='det-3'>
                <span style={{fontSize:30,color:"rgb(89,193,234)"}}><FaHouseChimney  /></span>
                <h5 style={{fontSize:15}}>Renew new look</h5>
                <h6 style={{color:"grey",lineHeight:"2"}}>Both of us take a lot of time in getting cleaned and beautiful Clean Home. Professional Service.</h6>
            </div>
        </div>
        <div className='details-2'>
            <div className='del-1'>
            <span style={{fontSize:25,fontWeight:700}}>A Clean House is a</span>
            <span style={{fontSize:25,fontWeight:700}}> Happy Place!</span>
            <span style={{fontSize:15,color:"white"}}> Washla has met the demands of a growing</span>
            <span style={{fontSize:15,color:"white"}}> world</span>  
        </div>
             <div className='del-2'>
                <div style={{width:"100%",height:"50px",display:"flex",}}>
                    <div style={{width:"20%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white "}}>
                        <span style={{fontSize:50}}>W</span>
                    </div>
                    <div style={{width:"80%",height:"100%",fontSize:13,color:"white",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                        <p>ashla customer has a tremendous</p>
                        <p>opportunity to answer the call of logistic</p>
                    </div>
                </div>
                <p style={{fontSize:15,color:"white"}}>need across the globe.Has 26 afflicated state</p>
                <p style={{fontSize:15,color:"white"}}>soybean association representation 30</p>
                <p style={{fontSize:15,color:"white"}}>soybean-production state.</p>
            </div>
             <div className='del-3'>
                <p style={{fontSize:15,color:"white"}}>World's leading non-asset-based supply chain</p>
                <p style={{fontSize:15,color:"white"}}>management companies , we design and</p>
                <p style={{fontSize:15,color:"white"}}>implement industry-leading. We specialise in</p>
                <p style={{fontSize:15,color:"white"}}>intelligent & effective search and belives</p>
                <p style={{fontSize:15,color:"white"}}>the power of partneship to grow business.</p>
            </div>
        </div>
    </div>
    </div>
    </div>
   
   
    </>
  )
}

export default Landing