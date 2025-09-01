import Dummy from '@/components/data.jsx/Dummy'
import FormSection from '@/components/preview/FormSection'
import ResumePreview from '@/components/preview/ResumePreview'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Footer from '@/components/home/FourthSection/Footer'

const ResumePage = () => {
  const params = useParams()  
  const location = useLocation()
  const templateNumber=useParams()
  const [resumeInfo, setResumeInfo] = useState(Dummy)
  
  useEffect(() => {
    if (templateNumber) {
      localStorage.setItem("templateNumber", templateNumber)
    }
  }, [templateNumber])

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className='flex flex-col h-screen w-screen bg-gradient-to-b from-pink-100 via-rose-200 to-red-200 overflow-x-hidden'>
        <h1 className='text-center font-bold text-3xl mt-10'>Dynamic Resume Previewer</h1>

        <div className='flex flex-row justify-between m-12'>
          <FormSection />
          <ResumePreview templateNumber={templateNumber}/>
        </div>
        <Footer/>
      </div>
    </ResumeInfoContext.Provider>
  )
}

export default ResumePage
