import React from 'react'
import logo from "../../../assets/images/Ellipse 1.png"


const obj=[
    {
        img:logo,
        name:"Emily Williams",
        position:"Digital Marketing Project Manager"
    }
]

const Review = () => {
  
    return (
    <div className='border border-black p-6 text-black bg-amber-50 '>
        {obj.map((val,key)=>{
            return(
                <div key={key} className='flex flex-row items-center'>
                    <img src={val.img} alt="" className='w-13'/>
                    <div className='flex flex-col ml-2 text-[14px]'>
                        <h3 className='font-medium'>{val.name}</h3>
                        <h5 className='max-w-[150px] text-[10px] text-gray-600'>{val.position}</h5>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Review