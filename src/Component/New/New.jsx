import React from 'react'
import './New.css'
import dress1 from '../../Assets/Images/la-1.jpg'
import dress2 from '../../Assets/Images/la-2.jpg'
import dress3 from '../../Assets/Images/la-3.jpg'
import person1 from '../../Assets/Images/person-1.jpg'
import person2 from '../../Assets/Images/person-2.jpg'
import person3 from '../../Assets/Images/person-3.jpg'



const New = () => {
  return (
    <>
    <div className='news'>
        <div className='news-1'>
            <h5>WHY CHOOSE US</h5>
            <h2>Recent News</h2>
            <h5>We Specialise in intelligent & effective Search and belives in the power of</h5>
            <h5>partnership to grow business.</h5>
        </div>
        <div className='news-2'>
            <div className='news-3'>
                <div className='news-4'>
                    <img src={dress1} alt="" />
                </div>
                <div className='news-5'>
                    <div className='news-6'>
                        <h5 style={{color:"grey"}}>CLEANING</h5>
                        <h4>Temporary Ruling issued</h4>
                        <h6 style={{color:"grey"}}>Washla has met the demands of a</h6>
                        <h6 style={{color:"grey"}}>growing world cleaning tremendous.</h6>
                    </div>
                    <div className='news-7'>
                        <div className='news-9'>
                            <img src={person1} alt="" />
                        </div>
                        <div className='news-10'>
                            <h4>Martha Smith</h4>
                            <h6>Washla CEO</h6>
                        </div>
                    </div>
                    <div className='news-8'>
                    </div>
                </div>
            </div>
            <div className='news-3'>
                <div className='news-4'>
                    <img src={dress3} alt="" />
                </div>
                <div className='news-5'>
                    <div className='news-6'>
                        <h5 style={{color:"grey"}}>CLEANING</h5>
                        <h4>The Expands California</h4>
                        <h6 style={{color:"grey"}}>Welcome and every sed ut</h6>
                        <h6 style={{color:"grey"}}>perspiciats unde omnis iste natus.</h6>
                    </div>
                    <div className='news-7'>
                        <div className='news-9'>
                            <img src={person2} alt="" />
                        </div>
                        <div className='news-10'>
                            <h4>Matt Ryan</h4>
                            <h6>Lawyer</h6>
                        </div>
                    </div>
                    <div className='news-8'>
                    </div>
                </div>
            </div>
            <div className='news-3'>
                <div className='news-4'>
                    <img src={dress2} alt="" />
                </div>
                <div className='news-5'>
                    <div className='news-6'>
                        <h5 style={{color:"grey"}}>CLEANING</h5>
                        <h4>Temporary Ruling issued</h4>
                        <h6 style={{color:"grey"}}>Washla has met the demands of a</h6>
                        <h6 style={{color:"grey"}}>growing world cleaning tremendous.</h6>
                    </div>
                    <div className='news-7'>
                        <div className='news-9'>
                            <img src={person3} alt="" />
                        </div>
                        <div className='news-10'>
                            <h4>Laura Jones</h4>
                            <h6>Accountant</h6>
                        </div>
                    </div>
                    <div className='news-8'>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default New