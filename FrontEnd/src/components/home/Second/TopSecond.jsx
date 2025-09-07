import React from 'react'
import Review from "./Review" 
import Features from './Features'
import sign from "../../../assets/images/sign.png"
import girl from "../../../assets/images/Mask group.png"
import piggy from "../../../assets/images/piggy.png"

const TopSecond = () => {
  return (
    <div className='w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
      
      {/* Desktop Layout - Complex positioning for larger screens */}
      <div className='hidden lg:block relative h-96 xl:h-[500px]'>
        
        {/* Review Component */}
        <div className='absolute top-8 left-4 xl:top-10 xl:left-8 z-20'>
          <Review />
        </div>
        
        {/* Piggy Bank Icon */}
        <img 
          src={piggy} 
          alt="Piggy bank icon" 
          className='absolute top-4 right-8 xl:top-6 xl:right-12 w-8 h-8 xl:w-12 xl:h-12 object-contain z-10' 
          loading='lazy'
        />
        
        {/* Features Component */}
        <div className='absolute left-0 top-40 xl:top-48 z-20'>
          <Features />
        </div>
        
        {/* Main Girl Image */}
        <img 
          src={girl} 
          alt="Professional woman" 
          className='absolute left-1/2 top-24 xl:top-32 transform -translate-x-1/2 w-40 xl:w-48 h-auto object-contain z-30' 
          loading='lazy'
        />
        
        {/* Signature/Sign Image */}
        <img 
          src={sign} 
          alt="Signature" 
          className='absolute bottom-8 right-12 xl:bottom-12 xl:right-16 w-16 xl:w-20 h-auto object-contain z-10' 
          loading='lazy'
        />
      </div>

      {/* Tablet Layout - Simplified grid for medium screens */}
      <div className='hidden md:block lg:hidden'>
        <div className='grid grid-cols-2 gap-6 items-center'>
          
          {/* Left Column */}
          <div className='space-y-6'>
            <Review />
            <Features />
          </div>
          
          {/* Right Column */}
          <div className='relative flex flex-col items-center space-y-4'>
            <img 
              src={girl} 
              alt="Professional woman" 
              className='w-32 h-auto object-contain' 
              loading='lazy'
            />
            <div className='flex justify-between w-full px-4'>
              <img 
                src={piggy} 
                alt="Piggy bank icon" 
                className='w-6 h-6 object-contain' 
                loading='lazy'
              />
              <img 
                src={sign} 
                alt="Signature" 
                className='w-12 h-auto object-contain' 
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked vertical layout */}
      <div className='block md:hidden space-y-6'>
        
        {/* Main Image with decorative elements */}
        <div className='relative flex justify-center py-8'>
          <img 
            src={girl} 
            alt="Professional woman" 
            className='w-28 h-auto object-contain z-20' 
            loading='lazy'
          />
          
          {/* Small decorative icons */}
          <img 
            src={piggy} 
            alt="Piggy bank icon" 
            className='absolute top-4 right-8 w-5 h-5 object-contain z-10' 
            loading='lazy'
          />
          <img 
            src={sign} 
            alt="Signature" 
            className='absolute bottom-4 left-8 w-10 h-auto object-contain z-10' 
            loading='lazy'
          />
        </div>
        
        {/* Stacked Components */}
        <div className='space-y-4'>
          <Review />
          <Features />
        </div>
      </div>
    </div>
  )
}

export default TopSecond