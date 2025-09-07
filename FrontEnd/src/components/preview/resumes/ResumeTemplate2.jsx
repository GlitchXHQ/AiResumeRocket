import React from 'react'
import { GoDotFill } from "react-icons/go";

const ResumeTemplate2 = ({ resumeInfo }) => {
  return (
    <div className="w-full max-w-[650px] bg-white p-4 sm:p-6 md:p-7">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left / Name */}
        <div className="border p-4 sm:p-5 md:p-7 bg-gray-600 text-white rounded-md w-full md:w-auto">
          <div className="flex flex-wrap gap-1 text-[15px] font-medium">
            <h1>{resumeInfo?.firstName}</h1>
            <h1>{resumeInfo?.lastName}</h1>
          </div>
          <h1 className="text-[10px] sm:text-[12px] font-semibold">
            ({resumeInfo?.jobTitle})
          </h1>
        </div>

        {/* Right / Contact */}
        <div className="flex flex-col text-[10px] sm:text-[12px] w-full md:w-auto">
          <div className="flex flex-wrap items-center gap-1">
            <h1>{resumeInfo?.address}</h1>
            {resumeInfo?.city && (
              <>
                <GoDotFill />
                <h1>{resumeInfo?.city}</h1>
              </>
            )}
            {resumeInfo?.state && (
              <>
                <GoDotFill />
                <h1>{resumeInfo?.state}</h1>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-start md:justify-end">
            <h1>{resumeInfo?.phone}</h1>
            <GoDotFill />
          </div>
          <div className="flex flex-wrap items-center gap-1 justify-start md:justify-end">
            <h1>{resumeInfo?.userEmail}</h1>
            <GoDotFill />
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="font-semibold mt-4 text-sm sm:text-base">
        SUMMARY <span className="hidden sm:inline">-------------------------------------------------------------------------------</span>
      </div>
      <div className="text-[12px] sm:text-[13px] mt-2">
        {resumeInfo?.summary}
      </div>

      {/* SKILLS */}
      <div className="mt-6">
        <h2 className="text-base sm:text-lg font-bold text-gray-700">SKILLS</h2>
        <ul className="list-inside text-sm text-gray-600 mt-2 space-y-1">
          {resumeInfo?.skills?.map((val, key) => (
            <li key={key} className="flex flex-wrap gap-1 text-[12px] sm:text-[14px]">
              <h1 className="font-medium">{val.name}:</h1>
              <h1>{val.heading}</h1>
            </li>
          ))}
        </ul>
      </div>

      {/* EXPERIENCE */}
      <div className="font-semibold mt-4 text-sm sm:text-base">
        EXPERIENCE <span className="hidden sm:inline">------------------------------------------------------------</span>
      </div>
      <div>
        {resumeInfo?.experience?.map((val, key) => (
          <div key={val.id || key} className="mt-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex flex-col text-[13px] sm:text-[14px] font-semibold">
                <div className="flex flex-wrap gap-1">
                  <h1>{val.companyName}</h1>
                  {val.city && <h1>, {val.city}</h1>}
                  {val.state && <h1>, {val.state}</h1>}
                </div>
                <h1 className="text-[10px]">{val.jobTitle}</h1>
              </div>
              <div className="flex flex-row text-[10px] text-gray-400">
                <h1>{val.startDate} - </h1>
                <h1>{val.currentlyWorking ? "Current" : val.endDate}</h1>
              </div>
            </div>
            <div
              className="text-[12px] mt-1"
              dangerouslySetInnerHTML={{
                __html: val.workSummary
                  ?.split("\n")
                  .map((line) => `<div>${line.trim()}</div>`)
                  .join(""),
              }}
            />
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <div className="font-semibold mt-4 text-sm sm:text-base">
        PROJECTS <span className="hidden sm:inline">------------------------------------------------------------</span>
      </div>
      <div>
        {resumeInfo?.projects?.map((val, key) => (
          <div key={key} className="mt-2">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h1 className="text-[13px] sm:text-[14px] font-medium">{val.name}</h1>
              <h1 className="text-[10px] text-gray-600">{val.date}</h1>
            </div>
            <div className="text-[12px]">{val.about}</div>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <div className="font-semibold mt-4 text-sm sm:text-base">
        EDUCATION <span className="hidden sm:inline">---------------------------</span>
        <div className="flex flex-col">
          {resumeInfo?.education?.map((val, key) => (
            <div key={key} className="mt-2">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h1 className="text-[13px] sm:text-[14px] font-medium">
                  {val.universityName}
                  {val.city ? `, ${val.city}` : ""}
                  {val.state ? `, ${val.state}` : ""}
                </h1>
                <div className="flex flex-row text-[10px] text-gray-600">
                  <h1>{val.startDate} -</h1>
                  <h1>{val.endDate}</h1>
                </div>
              </div>
              <div className="text-[12px]">
                {val.degree} - {val.major}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumeTemplate2
