import { ResumeInfoContext } from '@/context/ResumeInfoContext.jsx'
import React, { useContext, useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import RichTextEditor from '@/components/RichTextEditor.jsx'
import { toast } from 'sonner'

const Skills = () => {
  const[skillList,setSkillList]=useState([
    {
      category:"",
      items:""
    }
  ])

  const{resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  const[loading,setLoading]=useState(false)

  const RemoveSection=(key)=>{
    if(skillList.length===1)
      toast.error("Add Atleast 1 Skill")
    else{
      const updatedList=skillList.filter((_,i)=>i!==key)
      setSkillList(updatedList)
  }}
  const AddSection=()=>{
    setSkillList([...skillList,{
      category:"",
      items:""
    }])
  }

  const changeHandler=(e,key)=>{
    const{value}=e.target
    const updatedList=[...skillList]
    updatedList[key].category=value
    setSkillList(updatedList)
  }

  const handleRichTextEditor=(content,key)=>{
    const updatedList=[...skillList]
    updatedList[key].items=content
    setSkillList(updatedList)
  }
  
  // useEffect(()=>
  // {
  //   setResumeInfo({
  //     ...resumeInfo,
  //     skills:skillList
  // })
  // },[skillList])


  const onSave=()=>{
    console.group(skillList)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Skills Details</h1>
        <p className="text-sm text-gray-500">Add information about your Skills</p>
      </div>


      <div className='flex flex-col bg-white p-5'>
      {
        skillList.map((val,key)=>(
          <div key={key} className='relative border rounded-lg shadow-sm p-4 bg-gray-50'>
            <button
            type="button"
            onClick={() => RemoveSection(key)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-600"
            >
            <Trash2/>
            </button>
            <div className='flex flex-col mb-3'>
            <label>Heading</label>
            <input value={val.category} onChange={(e)=>changeHandler(e,key)} type="text" placeholder='Eg: Languages' className='border border-gray-400 rounded px-2 py-1'/>
            </div>

            <div className='flex flex-col'>
              <h1 className='font-medium'>Skills</h1>
              <RichTextEditor  value={val.items} onRichTextEditorChange={(content)=>handleRichTextEditor(content,key)}/>
            </div>

            <button type='button' onClick={AddSection} className='mt-3 text-blue-600 hover:underline'>Add Section</button>
          </div>
        ))
      }
    </div>
    <button type='button' onClick={onSave}>Save</button>
    </div>
  )
}

export default Skills