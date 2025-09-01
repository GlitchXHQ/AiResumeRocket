import React from 'react'
import frame1 from "../../../assets/images/Frame 1.png"
import Button from '@/components/common/Button'


const GetStarted = () => {
  return (
    <div className='mt-17 flex flex-col items-center'>
        <div className='relative'>
            <img src={frame1} alt="" className='w-[1000px]'/>
        </div>
        <div className='absolute font-semibold text-[30px] flex flex-col items-center text-amber-100 mt-15'>
                <h1>Use Resume Builder and land</h1>
                <h1>your dream job</h1>
                <div className='flex flex-col items-center'>                
                    <div className='h-[100px] p-2'><Button >Create Resume</Button></div>
                    <p className='text-[10px]'>First Trial Free</p>
                </div>
        </div>
    </div>
  )
}

export default GetStarted