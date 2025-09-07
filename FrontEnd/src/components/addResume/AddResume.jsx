import React, { useEffect, useState } from 'react'
import Faces from './Faces'
import Content from './Content'
import Features from './Features'
import { PlusSquare, User } from 'lucide-react'
import Resumes from './Resumes'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from './../../services/GlobalApi'
import Footer from '../home/FourthSection/Footer'
import ResumeCardItem from './ResumeCardItem'

const AddResume = () => {
  const { user } = useUser()
  const [resumeData, setresumeData] = useState([])

  useEffect(() => {
    localStorage.removeItem("resumes")

    const cached = localStorage.getItem("resumes")

    if (cached) {
      setresumeData(JSON.parse(cached))
    } else if (user) {
      getAllResumes()
    }
  }, [user])

  const getAllResumes = async () => {
    try {
      const res = await GlobalApi.getUserResume(user?.primaryEmailAddress?.emailAddress)
      console.log("Api response:", res.data)
      setresumeData(res.data.data)
      localStorage.setItem("resumes", JSON.stringify(res.data.data))
    }
    catch (Error) {
      console.log("Error While Fetching", Error)
    }
  }

  useEffect(() => {
    const cached = localStorage.getItem("resumes")
    console.log("Updated: ", resumeData)
    console.log("Cached Resumes: ", cached)
  }, [resumeData])

  return (
    <div className="mt-3">
      <div className="flex flex-col mt-16 justify-center items-center mb-2.5 px-4 sm:px-6 lg:px-8">
        <Faces />
        <Content />

        <div className="mt-6 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl">
            Completely free and customizable for your own purpose.
          </p>
        </div>

        <Features />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
          <Resumes />
          {
            (resumeData.length > 0) && resumeData.map((val, key) => (
              <ResumeCardItem Resume={val} key={key} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddResume
