import { Edit, Loader2 } from 'lucide-react'
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
  const navigate = useNavigate()
  const templateNumber = useParams()

  const Handler = () => {
    console.log("Resume Id:", Resume.ResumeId || Resume.id)
    setLoading(true)
    navigate(`/dashboard/resume/${Resume.documentId}/edit`)
    setLoading(false)
  }

  return (
    <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[350px]">
      {/* Card */}
      <div className="
        flex items-center justify-center 
        border border-black rounded-sm 
        bg-purple-300 cursor-crosshair
        hover:shadow-gray-800 hover:shadow-sm hover:scale-105 
        h-[220px] sm:h-[250px] md:h-[270px] 
        p-4 sm:p-6 md:p-8
        transition-all
      ">
        <h1
          onClick={() => setopenD(true)}
          className="hover:scale-110 border-2 border-black p-2 rounded-full transition-transform"
        >
          <Edit />
        </h1>
      </div>

      {/* Title */}
      <h1 className="text-sm sm:text-base font-light text-start mt-2 truncate">
        {Resume.Title}
      </h1>

      {/* Dialog */}
      <Dialog open={openD} onOpenChange={setopenD}>
        <DialogContent className="max-w-sm sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Do You Want To Edit?</DialogTitle>
            <DialogDescription className="flex flex-row justify-end gap-3 mt-4">
              <div onClick={Handler}>
                <Button color={true} disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : "Proceed"}
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
