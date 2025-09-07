import React from 'react'
import logo from "../../../assets/images/Ellipse 1.png"

const reviews = [
  {
    id: 1,
    img: logo,
    name: "Emily Williams",
    position: "Digital Marketing Project Manager"
  }
]

const Review = () => {
  return (
    <div className='w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto'>
      <div className='border border-black rounded-lg p-4 sm:p-6 md:p-8 text-black bg-amber-50 shadow-sm hover:shadow-md transition-shadow duration-300'>
        {reviews.map((review) => (
          <div key={review.id} className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
            
            {/* Profile Image */}
            <div className='flex-shrink-0'>
              <img 
                src={review.img} 
                alt={`${review.name}'s profile`}
                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-amber-200'
              />
            </div>
            
            {/* User Information */}
            <div className='flex flex-col text-center sm:text-left flex-grow'>
              <h3 className='font-semibold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2'>
                {review.name}
              </h3>
              <p className='text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed'>
                {review.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review