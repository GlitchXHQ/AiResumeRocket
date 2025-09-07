import React from 'react'

const Features = () => {
  const features = [
    'Personal Details',
    'Experience', 
    'Education',
    'Skills',
    'Languages',
    'Certificates',
    'Summary'
  ]

  return (
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto'>
      <div className='bg-black text-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full'>
        
        {/* Header */}
        <h2 className='text-xs sm:text-sm md:text-base font-semibold tracking-wider mb-4 sm:mb-6 text-gray-300 border-b border-gray-600 pb-2'>
          FEATURES
        </h2>
        
        {/* Features List */}
        <ul className='space-y-2 sm:space-y-3'>
          {features.map((feature, index) => (
            <li 
              key={index}
              className='text-sm sm:text-base md:text-lg text-white hover:text-gray-300 transition-colors duration-200 flex items-center'
            >
              {/* Bullet Point */}
              <span className='w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0'></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Features