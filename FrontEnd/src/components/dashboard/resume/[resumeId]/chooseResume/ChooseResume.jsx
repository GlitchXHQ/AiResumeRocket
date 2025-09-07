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
    localStorage.setItem("TemplateNumber", num)
    navigate(`/dashboard/resume/${resumeId}/chooseResume`)
  }

  useEffect(() => {
    console.log("UUID:", resumeId)
    console.log("Selected Template:", templateNumber)
  }, [resumeId, templateNumber])

  return (
    <div 
      className="w-screen min-h-screen flex flex-col items-center mx-auto relative overflow-x-hidden p-4"
      style={{ background: 'linear-gradient(135deg, #60a5fa, #fefefe, #fca5a5)' }}
    >
      <h1 className="mt-20 md:mt-32 text-2xl md:text-3xl font-bold text-center px-2">
        Choose One Template For Your Resume
      </h1>

      {/* Decorative images */}
      <span className="absolute w-14 md:w-20 top-10 md:top-15 left-1/3 hidden sm:block">
        <img src={i1} alt="" />
      </span>
      <span className="absolute w-14 md:w-20 top-8 md:top-12 left-4">
        <img src={i3} alt="" />
      </span>
      <span className="absolute w-14 md:w-20 top-10 md:top-15 right-1/4">
        <img src={i2} alt="" />
      </span>

      {/* Resume Templates */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 mt-10">
        {arr.map((template, index) => (
          <img
            key={index}
            src={template}
            alt={`Template ${index + 1}`}
            className="w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[400px] rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleSelect(index + 1)}
          />
        ))}
      </div>
    </div>
  )
}

export default ChooseResume
