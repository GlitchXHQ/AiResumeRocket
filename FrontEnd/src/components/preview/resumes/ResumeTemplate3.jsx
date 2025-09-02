import React from "react";

const ResumeTemplate3 = ({ resumeInfo }) => {
  return (
    <div className="max-w-[700px] mx-auto bg-white shadow-lg">
      <div className="bg-[#000033] relative flex items-center h-[140px] px-6">
        <img
          src={resumeInfo?.image}
          alt="Profile Picture"
          className="w-[110px] h-[110px] rounded-full border-4 border-white absolute -bottom-12 left-6 object-cover"
        />
        <div className="flex flex-col justify-end right-0 absolute bottom-0">
          <h1 className="text-4xl font-extrabold text-white ml-auto pr-4">
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
          <h1 className="text-white">{resumeInfo?.jobTitle}</h1>
        </div>
      </div>

      <div className="flex flex-row gap-8 px-6 pt-16 pb-8">
        <div className="w-[30%] pr-4 border-r border-gray-300">
          <h2 className="text-lg font-bold mb-4 text-gray-700">CONTACT</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm text-gray-600">{resumeInfo?.address}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-gray-600">{resumeInfo?.userEmail}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-gray-600">{resumeInfo?.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-sm text-gray-600">
              linkedin.com/{resumeInfo?.firstName}
              {resumeInfo?.lastName}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-700">SKILLS</h2>
            <div className="mt-2">
              {resumeInfo?.skills.map((val, key) => (
                <div key={key} className="text-sm mt-2">
                  <h3 className="font-semibold" dangerouslySetInnerHTML={{
                    __html:val.category?.split("\n")
      .map((line) => `<div>${line.trim()}</div>`)
      .join(""),
                  }} />
                  <ul className="ml-4 list-disc">
                    {val.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[70%]">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700">SUMMARY</h2>
            <p className="text-sm text-gray-600 mt-2 text-[12px]">
              {resumeInfo?.summary}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700">EXPERIENCE</h2>
            <div>
              {resumeInfo?.experience.map((val, key) => (
                <div key={val.id || key} className="max-w-[650px] mt-2">
                  <div className="flex flex-row justify-between font-semibold">
                    <div className="flex flex-col text-[14px]">
                      <div className="flex flex-row gap-1">
                        <h1>{val.companyName},</h1>
                        <h1>{val.jobTitle}</h1>
                      </div>
                      <div className="text-[12px] text-gray-500">
                        {val.city}
                        {val.city && val.state ? ", " : ""}
                        {val.state}
                      </div>
                    </div>
                    <div className="flex flex-row text-[10px] text-gray-400">
                      <h1>{val.startDate} - </h1>
                      <h1>
                        {val.currentlyWorking ? "Current" : `- ${val.endDate}`}
                      </h1>
                    </div>
                  </div>
                  <div
                    className="flex flex-col text-[12px]"
                    dangerouslySetInnerHTML={{
                      __html: val.workSummary
                        .split("\n")
                        .map((line) => `<div>${line.trim()}</div>`)
                        .join(""),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700">PROJECTS</h2>
            <div className="flex flex-col">
              {resumeInfo?.projects.map((val, key) => (
                <div key={key} className="max-w-[650px] mt-2">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-[14px] font-medium">{val.name}</h1>
                    <div className="text-[10px] text-gray-600">{val.date}</div>
                  </div>
                  <div className="text-[12px]">
                    <a
                      href={val.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {val.link}
                    </a>
                  </div>
                  <div className="text-[12px]">{val.about}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-700">EDUCATION</h2>
            <div className="flex flex-col">
              {resumeInfo?.education.map((val, key) => (
                <div key={key} className="max-w-[650px] mt-2">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-[14px] font-medium">
                      {val.universityName}
                    </h1>
                    <div className="flex flex-row text-[10px] text-gray-600">
                      <h1>{val.startDate} -</h1>
                      <h1>- {val.endDate}</h1>
                    </div>
                  </div>
                  <div className="flex flex-row text-[12px]">
                    <h1>{val.degree}-</h1>
                    <h1>{val.major}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate3;
