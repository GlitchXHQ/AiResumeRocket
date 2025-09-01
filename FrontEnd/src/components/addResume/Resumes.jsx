import { Loader2, PlusSquare } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Button from '../common/Button'
import { v4 as uuidv4 } from 'uuid'
import GlobalApi from '@/services/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Resumes = () => {
  const [openD, setopenD] = useState(false)
  const [Title, setTitle] = useState("")
  const {user}=useUser()
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()

  const onCreate=async()=>{
    setLoading(true)
    const uuid = uuidv4()

    const data={
      data:{
      Title:Title,
      resumeId:uuid,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName || user?.firstName || user?.username || "Anonymous"
      }
  }

  GlobalApi.createNewResume(data).then((res)=>{
    console.log("Document ID: ",res.data.data.documentId)
    if(res)
    {
      setLoading(false)
      navigate(`/dashboard/resume/${res.data.data.documentId}/edit`)
    }
  })
  }

  return (
    <div>
      {/* Resume Create Box */}
      <div className='flex items-center justify-center border p-27 h-[270px] border-black hover:shadow-gray-800 hover:shadow-sm hover:scale-x-105 rounded-sm cursor-crosshair'>
        <span 
          className='hover:scale-105 hover:shadow-gray-800 hover:shadow-sm' 
          onClick={() => setopenD(true)}
        >
          <PlusSquare />
        </span>
      </div>

      {/* Dialog */}
      <Dialog open={openD} onOpenChange={setopenD}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Resume</DialogTitle>
            <DialogDescription className='flex flex-col'>
              <p className='font-medium my-2 text-md'>Add Title</p>
              <input
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Eg: FrontEnd Developer Resume'
                className='border border-black rounded-md p-1 mb-1'
              />
            </DialogDescription>

            <DialogDescription className="flex flex-row gap-3 justify-end">
              <div onClick={onCreate}>
                <Button color={true} disabled={!Title || loading}>
                  {
                    loading? <Loader2 className='animate-spin'/> : "Proceed"
                  }
                </Button>
              </div>
              <div onClick={() => setopenD(false)}>
                <Button color={false}>Cancel</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Resumes
