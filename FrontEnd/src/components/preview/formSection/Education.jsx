import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx'
import { Trash2 } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const Education = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [loading, setLoading] = useState(false)
  const param = useParams()
  const [educationList, setEducationList] = useState([
    {
      universityName: "",
      startDate: "",
      endDate: "",
      degree: "",
      major: ""
    }
  ])

  const AddSection = () => {
    setEducationList([...educationList, {
      universityName: "",
      startDate: "",
      endDate: "",
      degree: "",
      major: ""
    }])
  }

  const RemoveSection = (idx) => {
    if(educationList.length===1){
      toast.error("Add Atleast 1 Education")
      return
    }
    else{
    const updatedList = educationList.filter((_, i) => i !== idx)
    setEducationList(updatedList)
    }
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setResumeInfo({
      ...resumeInfo,
      education:educationList
    })
    toast.success("Education Details Saved")
  }

  const ChangeHandler=(e,idx)=>{
    const {name,value}=e.target
    const updatedList=[...educationList]
    updatedList[idx][name]=value
    setEducationList(updatedList)
  }

  return (
    <div className="p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Education Details</h1>
        <p className="text-sm text-gray-500">Add information about your education</p>
      </div>

      {/* Education Sections */}
      <div className="space-y-6">
        {educationList.map((val, idx) => (
          <form
            key={idx}
            onSubmit={submitHandler}
            className="bg-white shadow rounded-2xl p-6 border border-gray-200 relative"
          >
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => RemoveSection(idx)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-600"
            >
            <Trash2 className="w-5 h-5" />
            </button>

            {/* University Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                University Name
              </label>
              <input
                type="text"
                name="universityName"
                placeholder="Cambridge University"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                onChange={(e)=>ChangeHandler(e,idx)}
              />
            </div>

            {/* Degree & Major */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="Bachelors"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  onChange={(e)=>ChangeHandler(e,idx)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Major
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  placeholder="Physics"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  onChange={(e)=>ChangeHandler(e,idx)}
                />
              </div>
            </div>

            {/* Start & End Dates */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  onChange={(e)=>ChangeHandler(e,idx)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                  onChange={(e)=>ChangeHandler(e,idx)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={AddSection}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                + Add Section
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  )
}

export default Education
