import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'

const Education = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

  const Handler = (e) => {
    const { name, value, type, checked } = e.target
    
    setResumeInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="border w-[600px] mt-5 p-6 bg-white shadow-purple-500 shadow-xl rounded-lg">
      <h1 className="text-lg font-semibold mb-3">
        Enter Your Educational Information
      </h1>
      <form className="flex flex-col gap-4">
        
        {/* University Name */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">University Name</label>
          <input
            type="text"
            name="universityName"
            value={resumeInfo.universityName}
            onChange={Handler}
            placeholder="XYZ University"
            className="border px-3 py-2 rounded-md"
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Start Date</label>
          <input
            type="date"
            name="educationStart"
            value={resumeInfo.educationStart}
            onChange={Handler}
            className="border px-3 py-2 rounded-md"
          />
        </div>

        {/* End Date + Current */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">End Date</label>
          {!resumeInfo.isCurrent ? (
            <input
              type="date"
              name="educationEnd"
              value={resumeInfo.educationEnd}
              onChange={Handler}
              className="border px-3 py-2 rounded-md"
            />
          ) : (
            <span className="italic text-gray-600">Current</span>
          )}

          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="isCurrent"
              checked={resumeInfo.isCurrent}
              onChange={Handler}
              className="w-4 h-4 accent-purple-500"
            />
            Currently Studying Here?
          </label>
        </div>
      </form>
    </div>
  )
}

export default Education
