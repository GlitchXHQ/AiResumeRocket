import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import T1 from "../../../../../assets/Templates/Template1.png"
import T2 from "../../../../../assets/Templates/Resume2.webp"
import T3 from "../../../../../assets/Templates/Resume3.jpeg"
import i1 from "../../../../../assets/bg/angry.png"
import i2 from "../../../../../assets/bg/dab.png"
import i3 from "../../../../../assets/bg/teddy-bear.png"

const arr = [T1, T2, T3]

const ChooseResume = () => {
  const navigate = useNavigate()
  const { resumeId } = useParams() 

  const [templateNumber, setTemplateNumber] = useState(null)

  const handleSelect = (num) => {
    setTemplateNumber(num) 
    localStorage.setItem("TemplateNumber",num)
    navigate(`/dashboard/resume/${resumeId}/edit`)
  }

  useEffect(() => {
    console.log("UUID:", resumeId)
    console.log("Selected Template:", templateNumber)
  }, [resumeId, templateNumber])

  return (
    <div 
      className='w-screen h-screen m-0 p-0 flex flex-col items-center mx-auto relative overflow-x-hidden'
      style={{ background: 'linear-gradient(135deg, #60a5fa, #fefefe, #fca5a5)' }}
    >
      <h1 className='mt-32 text-3xl font-bold text-center'>
        Choose One Template For Your Resume
      </h1>

      {/* Decorative images */}
      <span className='absolute w-20 top-15 left-1/3'><img src={i1} alt="" /></span>
      <span className='absolute w-20 top-12'><img src={i3} alt="" /></span>
      <span className='absolute w-20 top-15 right-2/6'><img src={i2} alt="" /></span>

      {/* Resume Templates */}
      <div className='flex flex-row gap-10 mt-10'>
        {arr.map((template, index) => (
          <img
            key={index}
            src={template}
            alt={`Template ${index + 1}`}
            className='h-[450px] rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer'
            onClick={() => handleSelect(index + 1)}
          />
        ))}
      </div>
    </div>
  )
}

export default ChooseResume
