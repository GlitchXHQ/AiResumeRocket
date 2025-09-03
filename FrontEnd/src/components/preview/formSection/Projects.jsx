import RichTextEditor from '@/components/RichTextEditor.jsx'
import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx';
import { Trash2 } from 'lucide-react';
import {React,useContext,useEffect,useState} from 'react'
import { Form, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import Skills from './Skills.jsx';
import { Loader } from 'lucide-react';
import GlobalApi from '@/services/GlobalApi.js';
const Projects = () => {

  const[projectList,setProjectList]=useState([
    {
      name:'',
      date:'',
      link:'',
      about:''
    }
  ])

  const params=useParams()
  const[loading,setLoading]=useState(false)
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  const AddSection=()=>{
    setProjectList([...projectList,{
      name:'',
      date:'',
      link:'',
      about:''
    }])
  }

  const RemoveSection=(idx)=>{
    if(projectList.length===1){
      toast.error("Add Atleast 1 Project")
      return
    }
    const updatedList=projectList.filter((_,i)=>i!==idx)
    setProjectList(updatedList)
  }

  const changeHandler=(e,idx)=>{
    const updatedList=projectList.slice()
    const{name,value}=e.target
    updatedList[idx][name]=value
    setProjectList(updatedList)
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    setLoading(true)
    const data={
      data:{
        projects:projectList
      }}
      console.log("data: ",data)
    // }
    // GlobalApi.updateUserResume(params?.resumeId,data).then(res=>
    // {
    //   setLoading(false)
    //   toast.success("Data Saved Successfully")
    // },err=>{
    //   toast.error("Error, Try Again Later")
    //   console.log("error: ",err)
    // })
    setLoading(false)
  }
  
    useEffect(()=>{
      setResumeInfo(prev => ({
        ...prev,
        projects: projectList
      }))
    },[projectList, setResumeInfo])

  return (
    <div className='border w-[600px] mt-5 p-4 h-fit bg-white shadow-purple-500 shadow-xl rounded-lg'>
        <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Project Details</h1>
        <p className="text-sm text-gray-500">Add information about your Project</p>
        </div>
      
      <div>
        {
          projectList.map((val,idx)=>(
            <form action="" className='relative border rounded-lg mt-10 shadow-gray-200 shadow-xl p-4' onSubmit={submitHandler} key={idx}>
              
              <div onClick={()=>RemoveSection(idx)} className='absolute top-2 right-2 text-red-500 text-[7  px]'>
                <Trash2/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="">Project Title</label>
                <input onChange={(e)=>changeHandler(e,idx)} name="name" value={val.name} type="text" className='border w-full border-gray-300 rounded-md p-1'/>
              </div>

              <div className='flex flex-row justify-between mt-3'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="">Date</label>
                  <input onChange={(e)=>changeHandler(e,idx)} name="date" value={val.date} type="date" className='border w-full border-gray-300 rounded-md p-1'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="">Link</label>
                  <input onChange={(e)=>changeHandler(e,idx)} name="link" value={val.link} type="text" className='border w-full border-gray-300 rounded-md p-1'/>
                </div>
              </div>

              <div className='mt-5'>
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
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={AddSection}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                + Add Section
              </button>

          <button
          type="submit"
          className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
          {loading? <Loader className='animate-spin'></Loader>:"Save"}
          </button>
            </div>
            </form>
          ))
        }
      </div>
    </div>
  )
}

export default Projects