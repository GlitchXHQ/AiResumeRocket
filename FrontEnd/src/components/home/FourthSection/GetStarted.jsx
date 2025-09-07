import React from 'react'
import frame1 from "../../../assets/images/Frame 1.png"
import Button from '@/components/common/Button'

const GetStarted = () => {
  return (
    <div className='mt-12 md:mt-17 flex flex-col items-center px-4 sm:px-6 lg:px-8'>
      {/* Container with relative positioning for overlay content */}
      <div className='relative w-full max-w-6xl mx-auto'>
        
        {/* Background Image */}
        <div className='relative w-full'>
          <img 
            src={frame1} 
            alt="Background frame" 
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
          
          {/* Overlay gradient for better text readability */}
          <div className='absolute inset-0 bg-black bg-opacity-20 rounded-lg'></div>
        </div>

        {/* Overlay Content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8'>
          
          {/* Main Heading */}
          <div className='mb-6 sm:mb-8'>
            <h1 className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-amber-100 leading-tight'>
              <span className='block'>Use Resume Builder and land</span>
              <span className='block'>your dream job</span>
            </h1>
          </div>
          
          {/* Call to Action */}
          <div className='flex flex-col items-center gap-3 sm:gap-4'>
            <div className='w-full sm:w-auto'>
              <Button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
                Create Resume
              </Button>
            </div>
            <p className='text-xs sm:text-sm text-amber-100 opacity-90'>
              It's Free
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted