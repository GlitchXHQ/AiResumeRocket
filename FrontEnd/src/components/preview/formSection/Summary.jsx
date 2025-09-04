import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from '@/services/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import { RiGeminiFill } from 'react-icons/ri'
import { generateText } from '@/services/Gemini'

const Summary = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const [show, setShow] = useState(false)
  const [summary, setSummary] = useState('')
  const [aiPrompt, setAiPrompt] = useState('')
  const [AiLoading, setAiLoading] = useState(false)

  useEffect(() => {
    if (summary) {
      setResumeInfo({
        ...resumeInfo,
        summary,
      })
    }
  }, [summary])

  const Submit = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = { data: { summary } }

    GlobalApi.updateUserResume(params?.resumeId, data).then(
      () => {
        setLoading(false)
        toast.success('Summary updated successfully')
      },
      () => {
        setLoading(false)
        toast.error('Failed to update summary')
      }
    )
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
      setSummary(result)
      setAiLoading(false)
    } catch {
      toast.error('Failed to generate summary.')
      setAiLoading(false)
    }
  }

  return (
    <div className="border w-[600px] mt-5 p-6 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Professional Summary</h1>
        <p className="text-sm text-gray-500 text-center">
          Write a concise overview highlighting your skills, experience, and expertise
        </p>
      </div>

      <form className="flex flex-col gap-3 mt-4" onSubmit={Submit}>
        <label htmlFor="summary" className="text-sm font-medium text-gray-700">
          Summary
        </label>
        <textarea
          id="summary"
          value={summary}
          placeholder={resumeInfo.summary || 'Write your professional summary here...'}
          className="border border-gray-300 rounded-lg h-[100px] p-2 focus:ring focus:ring-purple-200 focus:outline-none"
          onChange={(e) => setSummary(e.target.value)}
        />

        <div className="flex justify-between mt-2">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600"
            onClick={() => setShow(true)}
          >
            Generate Using AI
            <RiGeminiFill />
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </button>
        </div>

        {show && (
          <div className="mt-4 flex flex-col gap-3 border-t pt-4">
            <h2 className="text-base font-medium text-gray-700">Enter Your Prompt</h2>
            <textarea
              className="h-[100px] border border-gray-300 rounded-lg p-2 focus:ring focus:ring-purple-200 focus:outline-none"
              value={aiPrompt}
              placeholder="Eg: I am a FullStack Developer with 5 years of experience. Create a polished summary for me."
              onChange={(e) => setAiPrompt(e.target.value)}
            />
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              onClick={GenerateSummaryFromAI}
              disabled={AiLoading}
            >
              {AiLoading ? <LoaderCircle className="animate-spin" /> : 'Generate Now'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Summary
