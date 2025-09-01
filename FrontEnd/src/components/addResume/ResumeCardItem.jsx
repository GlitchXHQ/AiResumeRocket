import { BookAIcon, Edit, Loader2, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../common/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useNavigate, useParams } from 'react-router-dom'

const ResumeCardItem = ({ Resume }) => {
  const [openD, setopenD] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const templateNumber=useParams()

  const Handler = () => {
    console.log("Resume Id:", Resume.ResumeId||Resume.id)
    setLoading(true)
    // simulate async task (API call, etc.)
    navigate(`/dashboard/resume/${Resume.documentId}/edit`)
    setLoading(false)
  }
  
  return (
    <div>
      <div className='flex items-center justify-center border p-27 h-[270px] border-black hover:shadow-gray-800 hover:shadow-sm hover:scale-x-105 rounded-sm cursor-crosshair bg-purple-300'>
        <h1 onClick={() => setopenD(true)} className='hover:scale-105 border-2 border-black'>
          <Edit />
        </h1>
      </div>

      <h1 className='text font-light text-start mt-1 text-[15px]'>
        {Resume.Title}
      </h1>

      <Dialog open={openD} onOpenChange={setopenD}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Do You Want To Edit?</DialogTitle>
            <DialogDescription className='flex flex-row justify-end gap-3'>
              <div onClick={Handler}>
                <Button color={true} disabled={loading}>
                {loading ? <Loader2 className='animate-spin' /> : "Proceed"}
              </Button>
              </div>

              <div onClick={() => setopenD(false)}>
                <Button color={false}>
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

export default ResumeCardItem
