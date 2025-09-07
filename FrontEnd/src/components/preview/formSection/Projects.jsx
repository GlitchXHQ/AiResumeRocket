import RichTextEditor from '@/components/RichTextEditor.jsx'
import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx'
import { Trash2, Loader } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import GlobalApi from '@/services/GlobalApi.js'
import { generateText } from '@/services/Gemini.js'

const Projects = () => {
  const [projectList, setProjectList] = useState([
    { name: '', date: '', link: '', about: '' },
  ])
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const { setResumeInfo } = useContext(ResumeInfoContext)
  const [loadingAI, setLoadingAI] = useState(null)

  const AddSection = () => {
    setProjectList([...projectList, { name: '', date: '', link: '', about: '' }])
  }

  const RemoveSection = (idx) => {
    if (projectList.length === 1) {
      toast.error('Add at least 1 project')
      return
    }
    setProjectList(projectList.filter((_, i) => i !== idx))
  }

  const UseAI = async (content, idx) => {
    const prompt = content.replace(/<[^>]+>/g, '')
    if (prompt.length === 0) {
      toast.error('Input cannot be empty')
      return
    }
    try {
      setLoadingAI(idx)
      const Prompt = `Rewrite the following content into a single, ATS-friendly version using strong action verbs and industry-relevant keywords. 
      Enhance it by incorporating quantifiable achievements with numbers, percentages, or metrics. 

      ⚠️ Formatting rules:
      - Return ONLY in bullet points.
      - Each bullet point must start with ". " (dot + space).
      - No asterisks, dashes, or numbers.
      - Keep it concise and ATS-optimized.

      Content: ${prompt}`

      const result = await generateText(Prompt)
      const updatedList = [...projectList]
      updatedList[idx].about = result
      setProjectList(updatedList)
      setLoadingAI(null)
    } catch {
      setLoadingAI(null)
      toast.error('Network error, try again later')
    }
  }

  const changeHandler = (e, idx) => {
    const updatedList = [...projectList]
    const { name, value } = e.target
    updatedList[idx][name] = value
    setProjectList(updatedList)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setLoading(true)

    const data = { data: { projects: projectList } }

    GlobalApi.updateUserResume(params?.documentId, data).then(
      () => {
        setLoading(false)
        toast.success('Projects saved successfully')
      },
      () => {
        setLoading(false)
        toast.error('Error, try again later')
      }
    )
  }

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      projects: projectList,
    }))
  }, [projectList, setResumeInfo])

  return (
    <div className="border w-full max-w-[600px] mx-auto mt-5 p-4 sm:p-6 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg">
      <div className="mb-6 flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Project Details</h1>
        <p className="text-sm text-gray-500">Add information about your projects</p>
      </div>

      {projectList.map((val, idx) => (
        <form
          key={idx}
          onSubmit={submitHandler}
          className="relative border rounded-lg mt-6 shadow-gray-200 shadow-md p-4"
        >
          <div
            onClick={() => RemoveSection(idx)}
            className="absolute top-2 right-2 text-red-500 cursor-pointer"
          >
            <Trash2 size={18} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Project Title</label>
            <input
              onChange={(e) => changeHandler(e, idx)}
              name="name"
              value={val.name}
              type="text"
              placeholder="e.g., Employee Management System"
              className="border w-full border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Date & Link */}
          <div className="flex flex-col sm:flex-row justify-between mt-3 gap-4">
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <label className="text-sm font-medium">Date</label>
              <input
                onChange={(e) => changeHandler(e, idx)}
                name="date"
                value={val.date}
                type="date"
                className="border w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
              <label className="text-sm font-medium">Link</label>
              <input
                onChange={(e) => changeHandler(e, idx)}
                name="link"
                value={val.link}
                type="text"
                placeholder="e.g., https://github.com/project"
                className="border w-full border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-5">
            <RichTextEditor
              value={val.about}
              onRichTextEditorChange={(content) => {
                const updatedList = [...projectList]
                updatedList[idx].about = content
                setProjectList(updatedList)
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
            <button
              type="button"
              onClick={AddSection}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              + Add Section
            </button>

            <button
              type="button"
              onClick={() => UseAI(val.about, idx)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              {loadingAI === idx ? <Loader className="animate-spin" size={16} /> : 'Use AI'}
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
            >
              {loading ? <Loader className="animate-spin" size={16} /> : 'Save'}
            </button>
          </div>
        </form>
      ))}
    </div>
  )
}

export default Projects
