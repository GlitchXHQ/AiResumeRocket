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
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col my-8 md:my-15 min-h-screen' id='later'>
      {/* TopLevel - Main Hero Section */}
      <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
        
        {/* Left Content */}
        <div className='w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 lg:mb-6'>
            Stand out with a professionally designed resume
          </h1>
          
          <p className='text-sm sm:text-base md:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
            By employing the best practices and innovative tech, Resume Builder boosts your chances of landing a better job – completely for free.
          </p>
          
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6'>
            <div className='w-full sm:w-auto'>
              <Button className="w-full sm:w-auto px-6 py-3">Build Resume</Button>
            </div>
            <p className='text-xs sm:text-sm text-gray-500 text-center sm:text-left'>
              Registration required
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <TopSecond />
        </div>
      </div>

      {/* Second Section */}
      <div className='w-full'>  
        <Recruiters />
      </div>

      {/* Third Section */}
      <div className='w-full'>
        <Third />
      </div>

      {/* Customer Review Section */}
      <div className='w-full'>
        <Customer />
      </div>

      {/* Get Started Section */}
      <div className='w-full'>
        <GetStarted />
      </div>

      {/* Footer */}
      <div className='w-full mt-8 md:mt-15'>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage