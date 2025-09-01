import React from 'react'
import com1 from "../../../assets/images/Vector5.png"
import com2 from "../../../assets/images/Vector3.png"
import com3 from "../../../assets/images/Vector2.png"
import com4 from "../../../assets/images/Vector.png"
import com5 from "../../../assets/images/Vector 4.png"

const obj=[
    {
        c1:com1,
        c2:com2,
        c3:com3,
        c4:com4,
        c5:com5
    }
]

const Recruiters = () => {
  return (
    <div className='bg-[#f2f2f2] mt-60 flex flex-col p-10'>
        <div className='flex flex-col items-center text-3xl'>
            <h1>Resume Builder users get hired by the top</h1>
            <h1 className='font-bold'>companies worldwide</h1>
        </div>
        <div className='mt-7'>
            {
                obj.map((val,key)=>{
                    return(
                        <div key={key} className='flex justify-center space-x-20 opacity-50'>
                            <img src={val.c1} alt="" className="h-7 w-auto" loading="lazy"/>
                            <img src={val.c2} alt="" className="h-7 w-auto" loading="lazy"/>
                            <img src={val.c3} alt="" className="h-7 w-auto" loading="lazy"/>
                            <img src={val.c4} alt="" className="h-6 w-auto" loading="lazy"/>
                            <img src={val.c5} alt="" className="h-7 w-auto" loading="lazy"/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Recruiters