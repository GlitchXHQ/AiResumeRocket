import React from 'react'
import com1 from "../../../assets/images/Vector5.png"
import com2 from "../../../assets/images/Vector3.png"
import com3 from "../../../assets/images/Vector2.png"
import com4 from "../../../assets/images/Vector.png"
import com5 from "../../../assets/images/Vector 4.png"

const companies = [
  { id: 1, logo: com1, alt: "Company 1" },
  { id: 2, logo: com2, alt: "Company 2" },
  { id: 3, logo: com3, alt: "Company 3" },
  { id: 4, logo: com4, alt: "Company 4" },
  { id: 5, logo: com5, alt: "Company 5" }
]

const Recruiters = () => {
  return (
    <div className='bg-[#f2f2f2] mt-32 sm:mt-40 md:mt-48 lg:mt-60 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Heading Section */}
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight'>
            <span className='block sm:inline'>Resume Builder users get hired by the top</span>
            <span className='block font-bold'>companies worldwide</span>
          </h2>
        </div>
        
        {/* Companies Logos Section */}
        <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
          {companies.map((company) => (
            <div 
              key={company.id} 
              className='flex-shrink-0 opacity-60 hover:opacity-80 transition-opacity duration-300'
            >
              <img 
                src={company.logo} 
                alt={company.alt}
                className="h-6 sm:h-7 md:h-8 w-auto object-contain" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Alternative Mobile Layout - Stacked in rows for very small screens */}
        <div className='sm:hidden mt-8'>
          <div className='grid grid-cols-2 gap-8 justify-items-center'>
            {companies.slice(0, 4).map((company) => (
              <div key={`mobile-${company.id}`} className='opacity-60'>
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  className="h-6 w-auto object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-6'>
            <div className='opacity-60'>
              <img 
                src={companies[4].logo} 
                alt={companies[4].alt}
                className="h-6 w-auto object-contain" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recruiters