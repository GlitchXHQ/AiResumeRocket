import React from 'react'

const ResumeTemplate1 = ({ resumeInfo }) => {
  return (
    <div className='bg-white w-full max-w-[700px] mx-auto border rounded-lg overflow-hidden p-2 sm:p-4 lg:p-6'>
      <div className='w-full'>
        {/* Header */}
        <div className='flex flex-row gap-1 font-semibold text-base sm:text-lg lg:text-[15px] justify-between'>
          <h1>{resumeInfo?.firstName}</h1>
          <h1>{resumeInfo?.lastName}</h1>
        </div>
        <div className='flex flex-col mt-1 text-xs sm:text-sm lg:text-[10px] justify-between'>
          <h1 className='font-medium'>({resumeInfo?.jobTitle})</h1>
          <h1>{resumeInfo?.address}</h1>
          {resumeInfo?.city && <h1>{resumeInfo?.city}, {resumeInfo?.state}</h1>}
          <h1 className='break-all'>{resumeInfo?.userEmail}</h1>
        </div>

        {/* Summary */}
        <div className='font-semibold mt-3 sm:mt-4 lg:mt-2 text-sm sm:text-base lg:text-[14px] text-center'>SUMMARY</div>
        <div className='border-2 border-black w-full mt-1'></div>
        <div className='w-full text-xs sm:text-sm lg:text-[12px] mt-1 leading-relaxed'>{resumeInfo?.summary}</div>

        {/*SKILLS*/}
        <div className="mt-4 sm:mt-6 lg:mt-4">
          <h2 className="text-sm sm:text-base lg:text-[14px] font-semibold text-gray-700 text-center">SKILLS</h2>
          <div className='border-2 border-black w-full mt-1'></div>
          <div className="mt-2">
            {resumeInfo?.skills?.map((val, key) => (
              <div key={key} className="flex flex-col sm:flex-row gap-1 sm:gap-2 mb-1">
                <h1 className="font-medium text-xs sm:text-sm lg:text-[12px]">{val.name}:</h1>
                <h1 className="text-xs sm:text-sm lg:text-[12px]">{val.heading}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className='font-semibold mt-4 sm:mt-6 lg:mt-2 text-sm sm:text-base lg:text-[14px] text-center'>EXPERIENCE</div>
        <div className='border-2 border-black w-full mt-1'></div>
        <div>
          {resumeInfo?.experience.map((val, key) => (
            <div key={val.id || key} className='w-full mt-2'>
              <div className='flex flex-col sm:flex-row sm:justify-between font-semibold gap-1'>
                <div className='flex flex-col text-sm sm:text-base lg:text-[14px]'>
                  <div className='flex flex-col sm:flex-row gap-0 sm:gap-1'>
                    <h1>{val.companyName}</h1>
                    {val.city && <h1 className="hidden sm:inline">, {val.city}</h1>}
                    {val.state && <h1 className="hidden sm:inline">, {val.state}</h1>}
                    {(val.city || val.state) && (
                      <h1 className="sm:hidden text-xs">
                        {val.city && val.state ? `${val.city}, ${val.state}` : val.city || val.state}
                      </h1>
                    )}
                  </div>
                  <h1 className='text-xs sm:text-sm lg:text-[10px]'>{val.jobTitle}</h1>
                </div>
                <div className='flex flex-row text-xs sm:text-sm lg:text-[10px] text-gray-400'>
                  <h1>{val.startDate} -</h1>
                  <h1 className='ml-1'>{val.currentlyWorking ? "Current" : val.endDate}</h1>
                </div>
              </div>
              <div
                className='flex flex-col text-xs sm:text-sm lg:text-[12px] mt-1 leading-relaxed'
                dangerouslySetInnerHTML={{
                  __html: val.workSummary
                    ?.split("\n")
                    .map(line => `<div>${line.trim()}</div>`)
                    .join("")
                }}
              />
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className='font-semibold mt-4 sm:mt-6 lg:mt-2 text-sm sm:text-base lg:text-[14px] text-center'>PROJECTS</div>
        <div className='border-2 border-black w-full mt-1'></div>
        <div className='flex flex-col'>
          {resumeInfo?.projects.map((val, key) => (
            <div key={key} className='w-full mt-2'>
              <div className='flex flex-col sm:flex-row sm:justify-between gap-1'>
                <h1 className='text-sm sm:text-base lg:text-[14px] font-medium'>{val.name}</h1>
                <div className='text-xs sm:text-sm lg:text-[10px] text-gray-600'>{val.date}</div>
              </div>
              <div className='text-xs sm:text-sm lg:text-[12px] mt-1'>
                <a
                  href={val.link}
                  target="_blank"
                  rel="noreferrer"
                  className='text-blue-600 underline break-all hover:text-blue-800'
                >
                  {val.link}
                </a>
              </div>
              <div className='text-xs sm:text-sm lg:text-[12px] mt-1 leading-relaxed text-center'>{val.about}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className='font-semibold mt-4 sm:mt-6 lg:mt-2 text-sm sm:text-base lg:text-[14px] text-center'>EDUCATION</div>
        <div className='border-2 border-black w-full mt-1'></div>
        <div className='flex flex-col'>
          {resumeInfo?.education.map((val, key) => (
            <div key={key} className='w-full mt-2'>
              <div className='flex flex-col sm:flex-row sm:justify-between gap-1'>
                <h1 className='text-sm sm:text-base lg:text-[14px] font-medium'>
                  {val.universityName}
                  {val.city ? `, ${val.city}` : ""}
                  {val.state ? `, ${val.state}` : ""}
                </h1>
                <div className='flex flex-row text-xs sm:text-sm lg:text-[10px] text-gray-600'>
                  <h1>{val.startDate} -</h1>
                  <h1 className='ml-1'>{val.endDate}</h1>
                </div>
              </div>
              <div className='flex flex-row text-xs sm:text-sm lg:text-[12px] mt-1'>
                <h1>{val.degree} - {val.major}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sample data for preview
const sampleResumeInfo = {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Full Stack Developer",
  address: "123 Main Street",
  city: "New York",
  state: "NY",
  userEmail: "john.doe@example.com",
  summary: "Experienced full-stack developer with 5+ years of experience building scalable web applications using modern technologies. Passionate about creating efficient, user-friendly solutions and staying up-to-date with the latest industry trends.",
  skills: [
    { name: "Frontend", heading: "React, Vue.js, HTML/CSS, JavaScript" },
    { name: "Backend", heading: "Node.js, Python, Express.js" },
    { name: "Database", heading: "MongoDB, PostgreSQL, MySQL" },
    { name: "Tools", heading: "Git, Docker, AWS, CI/CD" }
  ],
  experience: [
    {
      id: 1,
      companyName: "Tech Solutions Inc.",
      city: "New York",
      state: "NY",
      jobTitle: "Senior Full Stack Developer",
      startDate: "Jan 2022",
      endDate: "Present",
      currentlyWorking: true,
      workSummary: "• Led development of microservices architecture serving 100k+ users\n• Implemented CI/CD pipelines reducing deployment time by 60%\n• Mentored junior developers and conducted code reviews"
    },
    {
      id: 2,
      companyName: "StartupCorp",
      city: "San Francisco",
      state: "CA",
      jobTitle: "Full Stack Developer",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      currentlyWorking: false,
      workSummary: "• Built responsive web applications using React and Node.js\n• Integrated third-party APIs and payment systems\n• Optimized database queries improving performance by 40%"
    }
  ],
  projects: [
    {
      name: "E-commerce Platform",
      date: "2023",
      link: "https://github.com/johndoe/ecommerce",
      about: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard."
    },
    {
      name: "Task Management App",
      date: "2022",
      link: "https://github.com/johndoe/taskmanager",
      about: "Developed a collaborative task management application with real-time updates using Socket.io and React."
    }
  ],
  education: [
    {
      universityName: "State University",
      city: "Boston",
      state: "MA",
      degree: "Bachelor of Science",
      major: "Computer Science",
      startDate: "2016",
      endDate: "2020"
    }
  ]
}

// Export the component with sample data for preview
export default () => <ResumeTemplate1 resumeInfo={sampleResumeInfo} />