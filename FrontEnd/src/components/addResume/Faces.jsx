import React from 'react'
import F3 from "../../assets/images/image 2101.png"
import F2 from "../../assets/images/image 2095.png"
import F1 from "../../assets/images/image 2057.png"

const Faces = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-wrap justify-center mx-auto gap-6 md:gap-10">
        <img 
          src={F2} 
          alt="" 
          className="border p-5 rounded-full bg-blue-100 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] hover:shadow-blue-600 hover:scale-105 hover:shadow-sm ease-in-out"
        />
        <img 
          src={F1} 
          alt="" 
          className="border p-5 rounded-full bg-purple-200 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] hover:shadow-blue-600 hover:scale-105 hover:shadow-sm ease-in-out"
        />
        <img 
          src={F3} 
          alt="" 
          className="border p-5 rounded-full bg-green-100 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] hover:shadow-blue-600 hover:scale-105 hover:shadow-sm ease-in-out"
        />
      </div>
    </div>
  )
}

export default Faces
