import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from '@/services/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import { RiGeminiFill } from "react-icons/ri";
import { generateText } from '../../../services/Gemini'

const Summary = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [loading, setLoading] = useState(false) 
  const params = useParams()
  const [show, setShow] = useState(false)
  const [summary, setSummary] = useState("")
  const [aiPrompt, setAiPrompt] = useState("")
  const [AiLoading,setAiLoading]=useState(false)

  useEffect(()=>{
     
    if (summary) {
      setResumeInfo({
        ...resumeInfo,
        summary:summary
      })
    }
  },[summary])

  const Submit = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = { data: { summary: summary } }
    GlobalApi.updateUserResume(params?.resumeId, data).then((res)=>{
      console.log("Summary Response: ",res)
      setLoading(false)
      toast("Details Updated")
    },(err)=>{
      setLoading(false)
      console.log("Error: ",err)
    })
  }

  const GenerateSummaryFromAI = async () => {
    try {
      setAiLoading(true)
      const Prompt = `Summarize the following resume into a concise 2–3 sentence summary.
      Focus only on skills, experience (in years), and technologies.
      Do NOT give multiple options — return only ONE version in this format:
      "Results-driven full-stack developer with X years of experience building and deploying high-quality web applications. Proficient in [3–4 key technologies] and passionate about creating innovative solutions."
      Resume content:
      ${aiPrompt}`
      const result = await generateText(Prompt)
      console.log("Result Is: ", result)
      setSummary(result)
      setAiLoading(false)
    } catch (err) {
      console.error("AI Error:", err)
      toast.error("Failed to generate summary.")
      setAiLoading(false)
    }
  }

  return (
    <div className="border w-[600px] mt-5 p-4 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg">
      <h1 className="text-lg font-semibold">Write About Your Professional Summary</h1>
      <div className='font-bold'>-------------------------------------------------------------------------------------</div>
      <div>
        <form className='flex flex-col' onSubmit={Submit}>
          <label htmlFor="summary">SUMMARY:</label>
          <textarea
            name="summary"
            id="summary"
            value={summary}
            placeholder={resumeInfo.summary}
            className='border-2 border-gray-300 h-[100px] overflow-x-hidden p-2'
            onChange={(e)=>setSummary(e.target.value)}
          />
          <div className='flex flex-row justify-between'>
            <button
              type="button"
              className="flex flex-row items-center mt-3 px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600"
              onClick={() => setShow(true)}
            >
              Generate Using AI
              <RiGeminiFill className='ml-2 mt-0.5'/>
            </button>
            <button
              type="submit"
              className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600"
            >
              {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
            </button>
          </div>

          {show && (
            <div className='mt-3 flex flex-col gap-2'>
              <h1>Enter Your Prompt</h1>
              <textarea 
                className='h-[100px] border-2 border-gray-300 p-2'
                value={aiPrompt}
                placeholder='Eg: I am FullStack with 5 years of Experience. Create a polished summary for me'
                onChange={(e)=>setAiPrompt(e.target.value)}
              />
              <button
                type="button"
                className="px-4 py-2 mt-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
                onClick={GenerateSummaryFromAI}
              >
              {AiLoading ? <LoaderCircle className='animate-spin' /> : 'Generate Now'}
              </button>
            </div>
          )}            
        </form>
      </div>
    </div>
  )
}

export default Summary
