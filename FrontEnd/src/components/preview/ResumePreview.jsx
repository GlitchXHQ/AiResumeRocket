import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import ResumeTemplate1 from './resumes/ResumeTemplate1'
import ResumeTemplate2 from './resumes/ResumeTemplate2'
import ResumeTemplate3 from './resumes/ResumeTemplate3'

const ResumePreview = ({templateNumber}) => {

  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  
  return (
    <div>
      {
        (templateNumber===1)?<ResumeTemplate1 resumeInfo={resumeInfo} templateNumber={templateNumber}/>:(templateNumber===2)?<ResumeTemplate2 resumeInfo={resumeInfo} templateNumber={templateNumber}/>:<ResumeTemplate3 resumeInfo={resumeInfo} templateNumber={templateNumber}/>
      }
    </div>
  )
}

export default ResumePreview