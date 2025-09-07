import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx'
import GlobalApi from '@/services/GlobalApi.js'
import { Loader, Trash2 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const Skills = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [loading, setLoading] = useState(false)

  const [skillList, setSkillList] = useState([{ name: '', heading: '' }])

  const params = useParams()

  const AddSection = () => {
    setSkillList([...skillList, { name: '', heading: '' }])
  }

  const RemoveSection = (idx) => {
    if (skillList.length === 1) {
      toast.error('Add Atleast 1 Skill')
      return
    } else {
      const updatedList = skillList.filter((_, i) => i !== idx)
      setSkillList(updatedList)
    }
  }

  const changeHandler = (e, idx) => {
    const updatedList = skillList.slice()
    const { name, value } = e.target
    updatedList[idx][name] = value
    setSkillList(updatedList)
  }

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillList,
    })
  }, [skillList])

  const submitHandler = async (e) => {
    if (skillList.length === 0) {
      toast.error('Fields Cannot Be Empty')
      return
    }
    e.preventDefault()
    setLoading(true)
    const data = {
      data: {
        skills: skillList,
      },
    }

    await GlobalApi.updateUserResume(params?.documentId, data).then(
      (res) => {
        setLoading(false)
        toast.success('Changes Saved SuccessFully')
      },
      (err) => {
        setLoading(false)
        toast.error('Network Error, Try Again')
      }
    )
  }

  return (
    <div className="border w-full max-w-[600px] mt-5 p-6 bg-white shadow-purple-500 shadow-xl rounded-xl mx-auto">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Skills Details</h1>
        <p className="text-sm text-gray-500">Add information about your skills</p>
      </div>

      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-6">
        {skillList.map((val, idx) => (
          <div
            key={idx}
            className="relative border border-gray-400 rounded-lg p-4 shadow-sm bg-gray-50"
          >
            {/* Remove button */}
            <div
              className="absolute text-sm top-1 right-2 text-red-500 cursor-pointer"
              onClick={() => RemoveSection(idx)}
            >
              <Trash2 />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heading
              </label>
              <input
                type="text"
                name="name"
                value={val.name}
                onChange={(e) => changeHandler(e, idx)}
                className="w-full px-3 py-2 text-sm border border-gray-400 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            {/* Skills Input */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              <input
                type="text"
                name="heading"
                value={val.heading}
                onChange={(e) => changeHandler(e, idx)}
                className="w-full px-3 py-2 text-sm border border-gray-400 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
          <button
            type="button"
            onClick={AddSection}
            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
          >
            + Add Section
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition flex items-center justify-center"
          >
            {loading ? <Loader className="animate-spin" /> : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Skills
