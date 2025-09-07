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
      if(res) {
        setLoading(false)
        navigate(`/dashboard/resume/${res.data.data.documentId}/edit`)
      }
    })
  }

  return (
    <div className="w-full flex justify-center">
      {/* Resume Create Box */}
      <div 
        className='flex items-center justify-center 
        border border-black rounded-sm cursor-crosshair 
        hover:shadow-gray-800 hover:shadow-sm hover:scale-105 
        transition-transform 
        w-full sm:w-[300px] md:w-[400px] lg:w-[450px] 
        h-[200px] sm:h-[220px] md:h-[250px] lg:h-[270px]'
      >
        <span 
          className='hover:scale-110 hover:shadow-gray-800 hover:shadow-sm transition-transform'
          onClick={() => setopenD(true)}
        >
          <PlusSquare size={40} />
        </span>
      </div>

      {/* Dialog */}
      <Dialog open={openD} onOpenChange={setopenD}>
        <DialogContent className="max-w-[95%] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl">
              Create a New Resume
            </DialogTitle>

            <DialogDescription className='flex flex-col'>
              <p className='font-medium my-2 text-sm sm:text-md'>Add Title</p>
              <input
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Eg: FrontEnd Developer Resume'
                className='border border-black rounded-md p-2 text-sm sm:text-base'
              />
            </DialogDescription>

            <DialogDescription className="flex flex-col sm:flex-row gap-3 justify-end mt-3">
              <div onClick={onCreate} className="w-full sm:w-auto">
                <Button 
                  color={true} 
                  disabled={!Title || loading} 
                  className="w-full sm:w-auto"
                >
                  {loading ? <Loader2 className='animate-spin'/> : "Proceed"}
                </Button>
              </div>
              <div onClick={() => setopenD(false)} className="w-full sm:w-auto">
                <Button color={false} className="w-full sm:w-auto">
                  Cancel
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Resumes
