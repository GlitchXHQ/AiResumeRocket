import React from 'react'
import r1 from "../../../assets/images/image (1) 1.png"
import r2 from "../../../assets/images/image (1) 2.png"
import r3 from "../../../assets/images/image (1) 3.png"

const obj=[
  {
    img1:r1,
    img2:r2,
    img3:r3
  }
]

const Third = () => {
  return (
    <div className='mt-17 '>
      <div className='flex flex-col items-center text-3xl'>
        <h1>Start by selecting a</h1>
        <h1 className='font-semibold'>resume template design</h1>
      </div>

      <div className='mt-10'>
        {
          obj.map((val,key)=>{
            return(
              <div key={key} className='flex flex-row space-x-10 items-center justify-center'>
                <img src={val.img1} alt="" className='bg-[#f2f2f2] p-10 rounded-lg cursor-pointer hover:scale-95'/>
                <img src={val.img2} alt="" className='bg-[#f2f2f2] p-10 rounded-lg cursor-pointer hover:scale-95'/>
                <img src={val.img3} alt="" className='bg-[#f2f2f2] p-10 rounded-lg cursor-pointer hover:scale-95'/>
              </div>
            )
          })
        }        
      </div>
    </div>
  )
}

export default Third;