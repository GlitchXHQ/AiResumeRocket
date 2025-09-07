import React from 'react'
import r1 from "../../../assets/images/image (1) 1.png"
import r2 from "../../../assets/images/image (1) 2.png"
import r3 from "../../../assets/images/image (1) 3.png"

const templates = [
  { id: 1, img: r1, alt: "Professional resume template" },
  { id: 2, img: r2, alt: "Modern resume template" },
  { id: 3, img: r3, alt: "Creative resume template" }
]

const Third = () => {
  return (
    <div className='mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Heading Section */}
        <div className='text-center mb-8 sm:mb-12 lg:mb-16'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight'>
            <span className='block'>Start by selecting a</span>
            <span className='block font-semibold mt-1 sm:mt-2'>resume template design</span>
          </h2>
        </div>

        {/* Templates Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center'>
          {templates.map((template) => (
            <div 
              key={template.id}
              className='group w-full max-w-sm'
            >
              <div className='bg-[#f2f2f2] p-6 sm:p-8 lg:p-10 rounded-lg cursor-pointer transition-all duration-300 hover:scale-95 hover:shadow-lg hover:bg-gray-100'>
                <img 
                  src={template.img} 
                  alt={template.alt}
                  className='w-full h-auto object-contain rounded-md'
                  loading='lazy'
                />
              </div>
              
              {/* Optional: Template label for better UX */}
              <div className='mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='text-sm text-gray-600 font-medium'>
                  {template.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Alternative carousel view for very small screens */}
        <div className='sm:hidden mt-8'>
          <div className='flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory'>
            {templates.map((template) => (
              <div 
                key={`mobile-${template.id}`}
                className='flex-shrink-0 w-64 snap-center'
              >
                <div className='bg-[#f2f2f2] p-6 rounded-lg cursor-pointer transition-all duration-300 hover:scale-95'>
                  <img 
                    src={template.img} 
                    alt={template.alt}
                    className='w-full h-auto object-contain rounded-md'
                    loading='lazy'
                  />
                </div>
                <p className='mt-2 text-center text-sm text-gray-600 font-medium'>
                  {template.alt}
                </p>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className='flex justify-center mt-4 gap-2'>
            {templates.map((_, index) => (
              <div key={index} className='w-2 h-2 bg-gray-300 rounded-full'></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third