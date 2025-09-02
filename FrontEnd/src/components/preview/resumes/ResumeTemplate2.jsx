import React from 'react'
import { GoDotFill } from "react-icons/go";

const ResumeTemplate2 = ({resumeInfo}) => {
  return (
    <div className='max-w-[650px] bg-white p-7 w-screen'>
      <div className='flex flex-row justify-between items-center'>
        {/* RightSide */}
        <div className='border p-7 bg-gray-600 text-white rounded-md'> 
          <div className='flex flex-row gap-1 t1 text-[15px] font-medium'>
              <h1>{resumeInfo?.firstName}</h1>
              <h1>{resumeInfo?.lastName}</h1>
          </div>
          <h1 className='text-[10px] font-semibold'>({resumeInfo?.jobTitle})</h1>
        </div>
        {/* LeftSide */}
        <div className='flex flex-col justify-end text-[10px]'>
          <div className='flex flex-row items-center'>
            <h1>{resumeInfo?.address}</h1>
            {resumeInfo?.city && <><GoDotFill /><h1>{resumeInfo?.city}</h1></>}
            {resumeInfo?.state && <><GoDotFill /><h1>{resumeInfo?.state}</h1></>}
          </div>
          <div className='flex flex-row items-center justify-end'>
            <h1>{resumeInfo?.phone}</h1>
            <GoDotFill />
          </div>
          <div className='flex flex-row items-center justify-end'>
            <h1>{resumeInfo?.userEmail}</h1>
            <GoDotFill />
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className='font-semibold mt-2'>
        SUMMARY <span>-------------------------------------------------------------------------------</span>
      </div>       
      <div className='max-w-[650px] text-[12px] mt-1'>
        {resumeInfo?.summary}
      </div>

      {/* EXPERIENCE */}
      <div className='font-semibold mt-2'>
        EXPERIENCE<span>------------------------------------------------------------</span>
      </div>       
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
                    {val.currentlyWorking ? "Current" : val.endDate}
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

      {/* PROJECTS */}
      <div className='font-semibold mt-2'>
        PROJECTS <span>------------------------------------------------------------</span>
      </div>
      <div>
        {resumeInfo?.projects?.map((val, key)=>(
          <div key={key} className='max-w-[650px] mt-2'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-[14px] font-medium'>{val.name}</h1>
              <h1 className='text-[10px] text-gray-600'>{val.timeline}</h1>
            </div>
            <div className='text-[12px]'>{val.description}</div>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <div className='font-semibold mt-2'>
        EDUCATION<span>---------------------------</span>
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
      </div>

      {/* SKILLS */}
      <div className='font-semibold mt-2'>
        SKILLS<span>--------------------------</span>
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

export default ResumeTemplate2
