import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx'
import GlobalApi from '@/services/GlobalApi.js'
import { Loader, Trash2 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
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
    if (educationList.length === 1) {
      toast.error("Add Atleast 1 Education")
      return
    }
    const updatedList = educationList.filter((_, i) => i !== idx)
    setEducationList(updatedList)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      data: { education: educationList }
    }
    await GlobalApi.updateUserResume(param?.resumeId,data).then(res=>{
      setLoading(false)
      toast.success("Saved Changes Successfully")
    },err=>{
      setLoading(false)
      toast.error("Network Error, Try Again Later")
    })

  }

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationList
    })
  }, [educationList])

  const ChangeHandler = (e, idx) => {
    const updatedList = educationList.slice()
    const { name, value } = e.target
    updatedList[idx][name] = value
    setEducationList(updatedList)
  }

  return (
    <div className="border w-[600px] mt-5 p-6 h-fit bg-white shadow-purple-500 shadow-xl rounded-xl">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Education Details</h1>
        <p className="text-sm text-gray-500">Add information about your education</p>
      </div>

      <div className="space-y-6">
        {educationList.map((val, idx) => (
          <form
            key={idx}
            onSubmit={submitHandler}
            className="bg-gray-50 shadow-md rounded-xl p-6 border border-gray-200 relative"
          >
            <button
              type="button"
              onClick={() => RemoveSection(idx)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition"
            >
              <Trash2 className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                University Name
              </label>
              <input
                type="text"
                name="universityName"
                placeholder="Cambridge University"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
                onChange={(e) => ChangeHandler(e, idx)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Degree
                </label>
                <input
                  type="text"
                  name="degree"
                  placeholder="Bachelors"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  onChange={(e) => ChangeHandler(e, idx)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Major
                </label>
                <input
                  type="text"
                  name="major"
                  placeholder="Physics"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  onChange={(e) => ChangeHandler(e, idx)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  onChange={(e) => ChangeHandler(e, idx)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  onChange={(e) => ChangeHandler(e, idx)}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={AddSection}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                + Add Section
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                {loading ? <Loader className="animate-spin w-4 h-4 mx-auto" /> : "Save"}
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  )
}

export default Education
