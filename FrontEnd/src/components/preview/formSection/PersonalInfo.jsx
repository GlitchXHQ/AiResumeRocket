import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from '@/services/GlobalApi'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
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
      [name]: value
    })

    setResumeInfo({
      ...resumeInfo,
      [name]: value
    })
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImage(previewUrl)
      setResumeInfo((prev) => ({
        ...prev,
        image: file
      }))
    }
  }

  useEffect(() => {
    console.log("Param ID:", params)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {

      data:{
        title:resumeInfo.title,
        resumeId:resumeInfo.resumeId,
        userEmail: resumeInfo.userEmail,
        userName: resumeInfo.userName,
        ...formData
      }
    }
 
    GlobalApi.updateUserResume(params?.resumeId, data)
      .then((resp) => {
        console.log("API Response:", resp)
        console.log("Saved info:", resumeInfo)
        toast("Changes have been saved.")
        setLoading(false)
      })  
      .catch((err) => {
        console.log("Document Id: ",params?.resumeId)
        console.error("Error updating resume:", err)
        setLoading(false)
      })
  }

  return (
    <div className="border w-[600px] mt-5 p-4 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg">
      <h1 className="text-lg font-semibold">Enter Your Basic Information</h1>
      <div className='font-bold'>-------------------------------------------------------------------------------------</div>

      <form className='mt-3' onSubmit={handleSubmit}>
        {templateNumber === 3 && (
          <div className='flex flex-row gap-3'>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id='image'
              name='image'
              accept="image/*"
              onChange={handleChangeImage}
              className='border p-1 rounded-md w-fit'
            />
          </div>
        )}

        <div className='flex flex-row gap-3 mt-2'>
          <div className='flex flex-row gap-3'>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder='eg: John'
              className='border-2'
              defaultValue={resumeInfo.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row gap-3'>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder='eg: Doe'
              className='border-2'
              defaultValue={resumeInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex flex-row gap-7 mt-1'>
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder='eg: Software Engineer'
            className='border-2 w-[450px]'
            defaultValue={resumeInfo.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-row gap-7 mt-1'>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder='eg: 525 N Tryon Street, NC 28117'
            className='border-2 w-[450px]'
            defaultValue={resumeInfo.address}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-row gap-12 mt-1'>
          <label>Email</label>
          <input
            type="email"
            name="email" 
            placeholder='eg: Ramen@gmail.com'
            className='border-2 w-[450px]'
            defaultValue={resumeInfo.email}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-row gap-1 mt-1'>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder='123456789'
            className='border-2 w-[425px]'
            defaultValue={resumeInfo.phone}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600"
          disabled={loading}
        >
          {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
        </button>
      </form>

      {Image && (
        <img
          src={Image}
          alt="Preview"
          className="mt-3 w-32 h-32 object-cover rounded-lg border"
        />
      )}
    </div>
  )
}

export default PersonalInfo
