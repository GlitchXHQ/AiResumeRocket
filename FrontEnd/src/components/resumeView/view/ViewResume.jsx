import React from 'react'

const ViewResume = () => {
  const handleDownload = () => {
    // Add your download logic here
    console.log("Download resume triggered")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Your Professional Resume
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Review your beautifully crafted resume below. Once you're satisfied with the content, 
              you can download it as a PDF to share with potential employers.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Resume Preview</h2>
            <p className="text-gray-500 mt-1">Take a final look before downloading</p>
          </div>
          
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                     text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl 
                     transform hover:scale-105 transition-all duration-200 flex items-center gap-3"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download PDF
          </button>
        </div>

        {/* Resume Display Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Paper Effect Header */}
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-sm text-gray-500 font-medium">Resume.pdf</span>
            </div>
          </div>

          {/* Resume Content Area */}
          <div className="p-8 min-h-[600px] bg-white">
            {/* 
              TODO: Replace this comment with your actual resume component
              Example: <ResumeTemplate data={resumeData} />
              
              This section should contain:
              - Personal information
              - Professional summary
              - Work experience
              - Education
              - Skills
              - Projects
              - Any other relevant sections
            */}
            
            {/* Placeholder content for demo */}
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Resume Content Goes Here
              </h3>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                Replace the comment above with your actual resume component to display 
                the formatted resume content in this beautiful container.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tips */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              💡 Pro Tips for Your Resume
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-medium text-blue-600">Keep it concise</span>
                <p className="mt-1">Aim for 1-2 pages maximum</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-medium text-purple-600">Tailor content</span>
                <p className="mt-1">Customize for each job application</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-medium text-green-600">Proofread</span>
                <p className="mt-1">Check for typos and formatting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewResume