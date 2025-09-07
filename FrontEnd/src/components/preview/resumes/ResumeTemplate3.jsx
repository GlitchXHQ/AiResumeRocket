import React from "react";

const ResumeTemplate3 = ({ resumeInfo }) => {
  return (
    <div className="w-full max-w-[700px] mx-auto bg-white shadow-lg">
      {/* Header */}
      <div className="bg-[#000033] relative flex items-center h-[140px] px-4 sm:px-6">
        {
          resumeInfo?.image && (
            <img
          src={resumeInfo?.image}
          alt="Profile Picture"
          className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full border-4 border-white absolute -bottom-10 sm:-bottom-12 left-4 sm:left-6 object-cover"
        />
          )
        }
        <div className="flex flex-col justify-end right-0 absolute bottom-0 pb-2 sm:pb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white ml-auto pr-2 sm:pr-4">
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
          <h1 className="text-xs sm:text-sm md:text-base text-white ml-auto pr-2 sm:pr-4">
            {resumeInfo?.jobTitle}
          </h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 sm:px-6 pt-14 sm:pt-16 pb-6 sm:pb-8">
        {/* Left Sidebar */}
        <div className="w-full md:w-[30%] pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0">
          <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-700">
            CONTACT
          </h2>
          <div className="mb-3 sm:mb-4">
            <h3 className="font-semibold text-sm sm:text-base">Address</h3>
            <p className="text-xs sm:text-sm text-gray-600">{resumeInfo?.address}</p>
          </div>
          <div className="mb-3 sm:mb-4">
            <h3 className="font-semibold text-sm sm:text-base">Email</h3>
            <p className="text-xs sm:text-sm text-gray-600">{resumeInfo?.email}</p>
          </div>
          <div className="mb-3 sm:mb-4">
            <h3 className="font-semibold text-sm sm:text-base">Phone</h3>
            <p className="text-xs sm:text-sm text-gray-600">{resumeInfo?.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">LinkedIn</h3>
            <p className="text-xs sm:text-sm text-gray-600 break-all">
              linkedin.com/{resumeInfo?.firstName}{resumeInfo?.lastName}
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[70%]">
          {/* SUMMARY */}
          <div className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-700">SUMMARY</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              {resumeInfo?.summary}
            </p>
          </div>

          {/* SKILLS */}
          <div className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-700">SKILLS</h2>
            <ul className="list-inside text-xs sm:text-sm text-gray-600 mt-2 space-y-1">
              {resumeInfo?.skills?.map((val, key) => (
                <li key={key} className="flex flex-wrap gap-2">
                  <span className="font-medium">{val.name}:</span>
                  <span>{val.heading}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERIENCE */}
          <div className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-700">EXPERIENCE</h2>
            {resumeInfo?.experience?.map((val, key) => (
              <div key={val.id || key} className="mt-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-semibold">
                  <div className="flex flex-col text-[13px] sm:text-[14px]">
                    <div className="flex flex-wrap gap-1">
                      <h1>{val.companyName},</h1>
                      <h1>{val.jobTitle}</h1>
                    </div>
                    <div className="text-[11px] sm:text-[12px] text-gray-500">
                      {val.city}{val.city && val.state ? ", " : ""}{val.state}
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400">
                    {val.startDate} - {val.currentlyWorking ? "Current" : val.endDate}
                  </div>
                </div>
                <div
                  className="text-[11px] sm:text-[12px] mt-1"
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
          <div className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-700">PROJECTS</h2>
            {resumeInfo?.projects?.map((val, key) => (
              <div key={key} className="mt-2">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h1 className="text-[13px] sm:text-[14px] font-medium">{val.name}</h1>
                  <div className="text-[10px] sm:text-[11px] text-gray-600">{val.date}</div>
                </div>
                <div className="text-[11px] sm:text-[12px] break-words">
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {val.link}
                  </a>
                </div>
                <div
                  className="text-[11px] sm:text-[12px] mt-1"
                  dangerouslySetInnerHTML={{
                    __html: val.about
                      ?.split("\n")
                      .map((line) => `<div>${line.trim()}</div>`)
                      .join(""),
                  }}
                />
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-700">EDUCATION</h2>
            {resumeInfo?.education?.map((val, key) => (
              <div key={key} className="mt-2">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h1 className="text-[13px] sm:text-[14px] font-medium">{val.universityName}</h1>
                  <div className="text-[10px] sm:text-[11px] text-gray-600">
                    {val.startDate} - {val.endDate}
                  </div>
                </div>
                <div className="text-[11px] sm:text-[12px]">
                  {val.degree} - {val.major}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate3;
