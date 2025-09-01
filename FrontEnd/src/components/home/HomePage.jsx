import React from 'react'
import TopSecond from './Second/TopSecond'
import Button from '@/components/common/Button'
import Recruiters from './recruiters/Recruiters'
import Customer from './FourthSection/Customer'
import GetStarted from './FourthSection/GetStarted'
import { useNavigate } from 'react-router-dom'
import Footer from './FourthSection/Footer'
import Third from './ThirdSection.jsx/Third'
const HomePage = () => {
  const navigate=useNavigate()
  return (
    <div className='flex flex-col my-15 max-h-fit' id='later'>
      {/* TopLevel */}
      <div className='flex flex-row justify-end w-[90%] mx-aut0 lazy-loading' >
        <div className='h-fit max-w-[500px]'>
          <h1 className='font-bold text-[40px] mb-2'>Stand out with a professionally designed resume</h1>
          <p className='text-[13px] text-gray-600 mb-5'>By employing the best practices and innovative tech, Resume Builder boosts your chances of landing a better job – completely for free.</p>
          <div className='flex flex-row items-center gap-5 max-w-[300px]'>
            <div><Button>Build Resume</Button></div>
            <p className='text-[10px] text-gray-500'>No registration required</p>
          </div>
        </div>
        <TopSecond/>
      </div>

      {/* Second */}
      <Recruiters/>

      {/* Third */}
      <Third/>

      {/* CustomerReview */}
      <Customer/>

      {/* SecondLast */}
      <GetStarted/>

      <div className='mt-15'>
          <Footer/>
      </div>
    </div>
  )
}

export default HomePage