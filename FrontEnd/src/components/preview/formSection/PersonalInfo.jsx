import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from '@/services/GlobalApi'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

const PersonalInfo = ({ templateNumber }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [Image, setImage] = useState(null)
  const params = useParams()
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    })
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImage(previewUrl)
      setResumeInfo((prev) => ({
        ...prev,
        image: file,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      data: {
        title: resumeInfo.title,
        resumeId: resumeInfo.resumeId,
        userEmail: resumeInfo.userEmail,
        userName: resumeInfo.userName,
        ...formData,
      },
    }

    GlobalApi.updateUserResume(params?.resumeId, data)
      .then(() => {
        toast('Changes have been saved.')
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        toast.error('Error updating resume, try again later')
      })
  }

  return (
    <div className="border w-full max-w-[600px] mx-auto mt-5 p-4 sm:p-6 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
          Personal Information
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your basic details below.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {templateNumber === 3 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChangeImage}
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="eg: John"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 focus:outline-none"
              defaultValue={resumeInfo.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="eg: Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 focus:outline-none"
              defaultValue={resumeInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="eg: Software Engineer"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 focus:outline-none"
            defaultValue={resumeInfo.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="eg: 525 N Tryon Street, NC 28117"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 focus:outline-none"
            defaultValue={resumeInfo.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="eg: Ramen@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 focus:outline-none"
            defaultValue={resumeInfo.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="123456789"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200 focus:outline-none"
            defaultValue={resumeInfo.phone}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? <LoaderCircle className="animate-spin mx-auto" /> : 'Save'}
        </button>
      </form>

      {Image && (
        <img
          src={Image}
          alt="Preview"
          className="mt-5 w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg border mx-auto"
        />
      )}
    </div>
  )
}

export default PersonalInfo
