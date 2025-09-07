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
  const templateNumber = useParams()
  const [resumeInfo, setResumeInfo] = useState(Dummy)
  
  useEffect(() => {
    if (templateNumber) {
      localStorage.setItem("templateNumber", templateNumber)
    }
  }, [templateNumber])

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="flex flex-col min-h-screen w-screen bg-gradient-to-b from-pink-100 via-rose-200 to-red-200 overflow-x-hidden">
        <h1 className="text-center font-bold text-3xl mt-10">Dynamic Resume Previewer</h1>

        {/* Responsive wrapper for form + preview */}
        <div className="flex flex-col md:flex-row justify-between m-6 md:m-12 gap-6 md:gap-12">
          <div className="flex-1">
            <FormSection />
          </div>
          <div className="flex-1 overflow-y-auto max-h-[80vh] rounded-lg shadow-lg bg-white p-4">
            <ResumePreview templateNumber={templateNumber}/>
          </div>
        </div>

        <Footer/>
      </div>
    </ResumeInfoContext.Provider>
  )
}

export default ResumePage
