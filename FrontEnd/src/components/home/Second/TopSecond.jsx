import React from 'react'
import Review from "./Review" 
import Features from './Features'
import sign from "../../../assets/images/sign.png"
import girl from "../../../assets/images/Mask group.png"
import piggy from "../../../assets/images/piggy.png"

const TopSecond = () => {
  return (
    <div className='relative w-[500px]'>
        <div className='absolute top-10 left-10'><Review/></div>
        <img src={piggy} alt="" className='absolute top-5 right-10' loading='lazy'/>
        <div className='absolute left-0 top-50'><Features/></div>
        <img src={girl} alt="" className='absolute left-60 top-30 w-[200px] z-10' loading='lazy'/>
        <img src={sign} alt="" className='absolute top-90 right-20' loading='lazy'/>
    </div>
  )
}

export default TopSecond