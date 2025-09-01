import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx'
import React, { useContext, useEffect, useState } from 'react'
import { CheckLine, Delete, LoaderCircle, PlusCircle } from 'lucide-react'
import RichTextEditor from '@/components/RichTextEditor.jsx'
import { toast } from 'sonner'
import { GiArtificialHive } from 'react-icons/gi'
import { Loader } from 'lucide-react'
import { generateText } from '@/services/Gemini.js'
import GlobalApi from '@/services/GlobalApi.js'
import { useParams } from 'react-router-dom'

const formField = {
  jobTitle: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  currentlyWorking: false,
  workSummary: '',
}

const Experience2 = () => {
  const [experienceList, setExperienceList] = useState([])
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [loading, setLoading] = useState(false)
  const [contentInside,setContentInside]=useState("")
  const [aiLoading,setAiLoading]=useState(false)
  const params=useParams()

  useEffect(() => {
    if (resumeInfo?.experience?.length > 0) {
      setExperienceList(resumeInfo.experience)
    } else {
      setExperienceList([formField])
    }
  }, [])

  const handleChange = (index, event) => {
    const { name, value,type,checked } = event.target
    const newEntries = [...experienceList]
    newEntries[index][name] = type ==='checkbox'? checked:value
    
    if(name==='currentlyWorking' && checked)
      newEntries[index].endDate=''

    setExperienceList(newEntries)
  }

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }])
  }

  const AiHelper=async (htmlContent,index)=>{
    const prompt=htmlContent.replace(/<[^>]+>/g, "")
    if(prompt.length===0)
      toast.error("Please Provide Prompt/Content")
    try{
      setAiLoading(true)
    const prompt1 = `
    You are a resume expert. 
    Your task is to read the following resume text and create a concise **work summary in 2–3 bullet points**. 

    Rules:
    - Only include skills, years of experience, and technologies.
    - Do not repeat the same sentences from the input.
    - Do not mention "resume content" or "summary".
    - Format the answer as plain text bullet points, each starting with "•".

    Resume text:
    ${prompt}`      

      const result=await generateText(prompt1)
      const updatedList=[...experienceList]
      updatedList[index].workSummary=result
      setExperienceList(updatedList)
      console.log("Result Received: ",result)
      setAiLoading(false)
    }catch(err)
    {
      toast.error("Please, Try Again Later")
      setAiLoading(false)
    }
  }

  const RemoveExperience = (index) => {
    if (experienceList.length === 1) {
      toast.error('Add at least one experience')
      return
    }
    setExperienceList((list) => list.filter((_, i) => i !== index))
  }

  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experienceList]
    newEntries[index][name] = experienceList.target.value
    setExperienceList(newEntries)
  }

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      Experience: experienceList,
    })
  }, [experienceList])

  const onSave = (e) => {
    // handle save
    e.preventDefault()
    setLoading(true)
    const data={
      data:{
      experience:experienceList
      }
    }
    console.log("Payload being sent:", data)
    GlobalApi.updateResumeExperience(params?.resumeId,data).then(res=>{
      console.log("Experience API Response: ",res)
      setLoading(false)
      toast("Details Updated Successfully")
    },
    (err)=>{
      console.log("Error Occured While Updating Experience Details: ",err)
      setLoading(false)
      toast.error('Error While Updating, Try again after sometime')
    })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Professional Experience</h1>
      <p className="text-gray-500 mb-6">Add your previous job experiences below.</p>

      {experienceList.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl border border-gray-200 mb-6"
        >
          <div className="grid grid-cols-2 gap-4 p-6">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Position Title
              </label>
              <input
                name="jobTitle"
                onChange={(event) => handleChange(index, event)}
                value={item?.jobTitle}
                className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                name="companyName"
                onChange={(event) => handleChange(index, event)}
                value={item?.companyName}
                className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">City</label>
              <input
                name="city"
                onChange={(event) => handleChange(index, event)}
                value={item?.city}
                className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">State</label>
              <input
                name="state"
                onChange={(event) => handleChange(index, event)}
                value={item?.state}
                className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                onChange={(event) => handleChange(index, event)}
                value={item?.startDate}
                className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">End Date</label>
              {!item.currentlyWorking?(
                <input
                type="date"
                name="endDate"
                onChange={(event) => handleChange(index, event)}
                value={item?.endDate}
                className="w-full mt-1 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              ):<span className='italic text-gray-600'>Current</span>}

              <label className="flex items-center gap-2 mt-2">
                <input type="checkbox"
                name='currentlyWorking'
                checked={item.currentlyWorking}
                className='w-4 h-4 accent-purple-500'
                onChange={(e)=>handleChange(index,e)}/>
                Currently Working Here?
              </label>
            </div>

            <div className="col-span-2">
              <label className="text-sm font-medium text-gray-600">
                Work Summary
              </label>
              <RichTextEditor
                index={index}
                value={item?.workSummary}
                onRichTextEditorChange={(content) =>{
                const updatedList=[...experienceList]
                updatedList[index].workSummary=content
                setContentInside(content)
                setExperienceList(updatedList)
              }
              }  
              />
            </div>
          </div>

          <div className="flex justify-between items-center border-t p-4 bg-gray-50 rounded-b-2xl">
            <div className='flex flex-row items-center gap-2' onClick={()=>AiHelper(item.workSummary,index)}>
              <GiArtificialHive className='text-red-600'/>
              <button type='button' className='text-red-600 cursor-pointer'>
                {aiLoading? <Loader className='animate-spin'></Loader>:"Use AI"} 
              </button>
              </div>
            <div className="flex gap-3">
              <button
                onClick={AddNewExperience}
                className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
              >
                <PlusCircle size={16} /> Add Experience
              </button>
              <button
                onClick={() => RemoveExperience(index)}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
              >
                <Delete size={16} /> Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
              disabled={loading}
              onClick={(e) => onSave(e)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
            </button>
    </div>
    
  )
}

export default Experience2
