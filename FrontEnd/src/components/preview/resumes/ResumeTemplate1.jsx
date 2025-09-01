import React from 'react'

const ResumeTemplate1 = ({resumeInfo}) => {
  return (
    <div className='bg-white w-fit max-w-[700px] border rounded-lg overflow-x-hidden'>
      {/* top */}
      <div className='top-0 w-screen m-1'>
        {/* Name Section */}
        <div className='flex flex-row gap-1 font-semibold t1 text-[15px]'>
          <h1>{resumeInfo?.firstName}</h1>
          <h1>{resumeInfo?.lastName}</h1>
        </div>
        {/* Address Section */}
        <div className='flex flex-col mt-1 t1 text-[10px]'>
          <h1 className='font-medium'>({resumeInfo?.jobTitle})</h1>
          <h1>{resumeInfo?.address}</h1>
          {resumeInfo?.city && <h1>{resumeInfo?.city}, {resumeInfo?.state}</h1>}
          <h1>{resumeInfo?.userEmail}</h1>
        </div>

        {/* Summary */}
        <div className='font-semibold mt-2'>SUMMARY</div>
        <div className='border-2 border-black w-[680px] mt-1'></div>
        <div className='max-w-[650px] text-[12px] mt-1'>{resumeInfo?.summary}</div>

        {/* Education */}
        <div className='font-semibold mt-2'>EDUCATION</div>
        <div className='border-2 border-black w-[680px] mt-1'></div>
        <div className='flex flex-col'>
          {resumeInfo?.education.map((val,key)=>(
            <div key={key} className='max-w-[650px] mt-2'>
              <div className='flex flex-row justify-between'>
                <h1 className='text-[14px] font-medium'>
                  {val.universityName}{val.city ? `, ${val.city}` : ""}{val.state ? `, ${val.state}` : ""}
                </h1>
                <div className='flex flex-row text-[10px] text-gray-600'>
                  <h1>{val.startDate} -</h1>
                  <h1>{val.endDate}</h1>
                </div>
              </div>
              <div className='flex flex-row text-[12px]'>
                <h1>{val.degree} - {val.major}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className='font-semibold mt-2'>EXPERIENCE</div>
        <div className='border-2 border-black w-[680px] mt-1'></div>
        <div>
          {
            resumeInfo?.experience.map((val,key)=>(
              <div key={val.id || key} className='max-w-[650px] mt-2'>
                <div className='flex flex-row justify-between font-semibold'>
                  <div className='flex flex-col text-[14px]'>
                    <div className='flex flex-row gap-1'>
                      <h1>{val.companyName}</h1>
                      {val.city && <h1>, {val.city}</h1>}
                      {val.state && <h1>, {val.state}</h1>}
                    </div>
                    <h1 className='text-[10px]'>{val.title}</h1>
                  </div>
                  <div className='flex flex-row text-[10px] text-gray-400'>
                    <h1>{val.startDate} -</h1>
                    <h1>
                      {val.currentlyWorking? "Current" : val.endDate}
                    </h1>
                  </div>
                </div>
                <div className='flex flex-col text-[12px]' 
                  dangerouslySetInnerHTML={{
                    __html: val.workSummary
                      ?.split("\n")
                      .map(line=> `<div>${line.trim()}</div>`)
                      .join("")
                  }}
                />
              </div>
            ))
          }
        </div>

        {/* Skills */}
        <div className='font-semibold mt-2'>SKILLS</div>
        <div className='border-2 border-black w-[680px] mt-1'></div>            
        <div className='mt-2'>
          {
            resumeInfo?.skills.map((val,key)=>(
              <div key={key} className='text-[12px]'>
                <li>{val.name}</li>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ResumeTemplate1
