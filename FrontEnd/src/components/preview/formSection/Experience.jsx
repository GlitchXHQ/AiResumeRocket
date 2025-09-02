import RichTextEditor from '@/components/RichTextEditor'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from '@/services/GlobalApi'
import { LoaderCircle, Trash2, Plus, Loader } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { GiArtificialHive } from 'react-icons/gi';
import { generateText } from '@/services/Gemini'

const Experience = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const params = useParams()
  const[aiLoading,setAiLoading]=useState(false)
  const[summary,setSummary]=useState("")
  const [experienceList, setExperienceList] = useState(
    resumeInfo?.experience?.length > 0
      ? resumeInfo.experience
      : [
          {
            jobTitle: '',
            companyName: '',
            city: '',
            state: '',
            startDate: '',
            endDate: '',
            workSummary: '',
            currentlyWorking: false,
          },
        ]
  )

  const [saving, setSaving] = useState(false)
  const [contentInside,setContentInside]=useState("")

  // ✅ safer state sync with callback
  useEffect(() => {
    setResumeInfo(prev => ({
      ...prev,
      experience: experienceList,
    }))
  }, [experienceList, setResumeInfo])

  // Handle input changes
  const changeHandler = (e, index) => {
  const { name, type, value, checked } = e.target 
  const updatedList = [...experienceList]

  updatedList[index][name] = type === 'checkbox' ? checked : value

  if (name === 'currentlyWorking' && checked) {
    updatedList[index].endDate = ''  // Clear end date if currently working
  }

  setExperienceList(updatedList)
}

  // Add new experience 
  const addExperienceHandler = () => {
    setExperienceList([
      ...experienceList,
      {
        jobTitle: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummary: '',
        currentlyWorking: false,
      },
    ])
  }

  // Remove experience
  const removeExperienceHandler = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index)
    setExperienceList(updatedList)
  } 

  const normalizeExperience = (list) => {
  return list.map(exp => ({
    jobTitle: exp.jobTitle?.trim() || null,
    companyName: exp.companyName?.trim() || null,
    city: exp.city?.trim() || null,
    state: exp.state?.trim() || null,
    startDate: exp.startDate 
      ? new Date(exp.startDate).toISOString().split("T")[0] 
      : null,
    endDate: exp.currentlyWorking 
      ? null 
      : exp.endDate 
        ? new Date(exp.endDate).toISOString().split("T")[0] 
        : null,
    workSummary: exp.workSummary?.trim() || null,
    currentlyWorking: !!exp.currentlyWorking,
  }))
  }
  const submitHandler = (e) => {
  e.preventDefault()
  setSaving(true)

  // 🔑 normalize before sending
  const cleanedExperience = normalizeExperience(experienceList)
  console.log('Payload Being Sent: ', cleanedExperience)
  const data={
    data:{
      experience:experienceList
    }
  }

  GlobalApi.updateResumeExperience(params?.resumeId, data).then(
    (res) => {
      console.log('Experience Api Response: ', res)
      setSaving(false)
      toast('Details Updated Successfully')
    },
    (err) => {
      console.log('Error Occured While Updating Experience Details: ', err)
      setSaving(false)
      toast.error('Error While Updating, Try again after sometime')
      console.log("Error occured is:", err)
    }
  )
}

  const AiHelper=async (htmlContent,index)=>{
    const prompt=htmlContent.replace(/<[^>]+>/g, "");
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
    ${prompt}
    `;

    const result=await generateText(prompt1)
    const updatedList=[...experienceList]
    updatedList[index].workSummary=result
    setExperienceList(updatedList)
    console.log("Result Received: ",result)
    setAiLoading(false)
    }catch(Err){
      toast.error("Please, Try Again Later")
      setAiLoading(false)
    }
  }


  return (
    <div className="p-4">
      <h2 className="font-bold text-lg mb-4">Professional Experience</h2>
      <form onSubmit={submitHandler}>
        {experienceList.map((val, index) => (
          <div
            key={val.id}
            className="border border-gray-300 rounded-lg p-4 mb-6 bg-white shadow-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium">Job Title</label>
                <input
                  id={`jobTitle-${index}`}
                  type="text"
                  name="jobTitle"
                  value={val.jobTitle}
                  placeholder="Eg. Software Engineer"
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) => changeHandler(e, index)}
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium">Company Name</label>
                <input
                  id={`companyName-${index}`}
                  type="text"
                  name="companyName"
                  value={val.companyName}
                  placeholder="Eg. Google"
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) => changeHandler(e, index)}
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  id={`city-${index}`}
                  type="text"
                  name="city"
                  value={val.city}
                  placeholder="Eg. Hyderabad"
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) => changeHandler(e, index)}
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  id={`state-${index}`}
                  type="text"
                  name="state"
                  value={val.state}
                  placeholder="Eg. Telangana"
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                  onChange={(e) => changeHandler(e, index)}
                />
              </div>
            </div>

            {/* Dates + Currently Working */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  id={`jobStartDate-${index}`}
                  type="date"
                  name="startDate"
                  value={val.startDate}
                  className="border px-2 py-1 rounded-md w-full border-gray-300"
                  onChange={(e) => changeHandler(e, index)}
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium">End Date</label>
                {!val.currentlyWorking ? (
                  <input
                    id={`jobEndDate-${index}`}
                    type="date"
                    name="endDate"
                    value={val.endDate}
                    className="border px-2 py-1 rounded-md w-full border-gray-300"
                    onChange={(e) => changeHandler(e, index)}
                  />
                ) : (
                  <span className="italic text-gray-600">Current</span>
                )}

                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    name="currentlyWorking"
                    checked={val.currentlyWorking}
                    className="w-4 h-4 accent-purple-500"
                    onChange={(e) => changeHandler(e, index)}
                  />
                  Currently Working Here?
                </label>
              </div>
            </div>

            {/* Work Summary */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Work Summary</label>
              <RichTextEditor
                key={val.id} // important to force unique editor instance
                value={val.workSummary} // controlled instead of defaultValue
                onRichTextEditorChange={(content) => {
                const updatedList = [...experienceList]
                updatedList[index].workSummary = content
                setContentInside(content)
                setExperienceList(updatedList)
                }}
              />
            </div>

            <div className='mt-4 flex flex-row justify-between'>
              
              <div className='flex flex-row items-center gap-2' onClick={()=>AiHelper(val.workSummary,index)}>
              <GiArtificialHive className='text-red-600'/>
              <button type='button' className='text-red-600 cursor-pointer'>
                {aiLoading? <Loader className='animate-spin'></Loader>:"Use AI"} 
              </button>
              </div>

            {/* Remove Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeExperienceHandler(index)}
                className="text-red-600 flex items-center gap-1 text-sm cursor-pointer"
              >
                <Trash2 className="w-4 h-4" /> Remove
              </button>
            </div>
            </div>
          </div>
        ))}

        {/* Add New Experience */}
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={addExperienceHandler}
            className="text-blue-600 flex items-center gap-1 text-sm"
          >
            <Plus className="w-4 h-4" /> Add New Experience
          </button>

          {/* Save All */}
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
          >
            {saving ? (
              <>
                <LoaderCircle className="w-4 h-4 animate-spin" /> Saving...
              </>
            ) : (
              'Save All'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Experience
