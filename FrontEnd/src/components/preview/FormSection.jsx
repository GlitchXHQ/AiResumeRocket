import React, { useState } from 'react'
import PersonalInfo from './formSection/PersonalInfo'
import Summary from './formSection/Summary'
import Education from './formSection/Education'
import Skills from './formSection/Skills'
import Projects from './formSection/Projects'
import Temp from './formSection/Temp.jsx'
import Button from '../common/Button'
import { FcPrevious } from "react-icons/fc";

const FormSection = () => {
  const [State, setState] = useState(1)
  const [showPopup, setShowPopup] = useState(false)

  const Handler = () => {
    if (State >= 6) {
      setShowPopup(true)
    } else {
      setState(State + 1)
    }
  }

  const CancelHandler=()=>{
    setShowPopup(false)
    setState(6)
  }

  return (
    <div className="max-w-[600px] mx-auto px-4 w-full">
      <div className="flex flex-row justify-end gap-3 mb-4">
        {State === 1 ? (
          <span onClick={Handler}>
            <Button color={true}>Next</Button>
          </span>
        ) : (
          <div className="flex flex-row gap-3 items-center">
            <span onClick={() => setState(State - 1)}>
              <Button><FcPrevious /></Button>
            </span>
            <span onClick={Handler}>
              <Button color={true}>
                {State === 6 ? "Finish" : "Next"}
              </Button>
            </span>
          </div>
        )}
      </div>

      {State === 1 && <PersonalInfo />}
      {State === 2 && <Summary />}
      {State === 3 && <Skills />}
      {State === 4 && <Temp />}
      {State === 5 && <Projects />}
      {State === 6 && <Education />}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Ready to Preview Resume?</h2>
            <p className="text-gray-600 mb-6">
              You’ve completed all sections. Would you like to preview your resume now?
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={CancelHandler}>
                Cancel
              </button>
              <Button color={true} onClick={() =>{
                setShowPopup(false)
                // Add Preview logic here
              }}>
                Yes, Preview
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default FormSection
