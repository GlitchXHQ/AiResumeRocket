import React, { useContext } from 'react'
import PersonalInfo from './formSection/PersonalInfo'
import Summary from './formSection/Summary'
import Education from './formSection/Education'
import Experience from './formSection/Experience'
import Skills from './formSection/Skills'
import Projects from './formSection/Projects'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useState } from 'react'
import Button from '../common/Button'
import { FcPrevious,FcNext } from "react-icons/fc";
import Experience2 from './formSection/Experience2.jsx'

const FormSection = () => {
  const [State, setState] = useState(1)

  const Handler=()=>{
    setState(State+1) 
  } 
  return (
    <div className='w-[600px]'>
      
      <div className='flex flex-row justify-end gap-3'>
        {
        State===1?<span onClick={()=>setState(State+1)}><Button color={true}>Next</Button></span>:
        <div className='flex flex-row gap-3 items-center'>
          <span onClick={()=>setState(State-1)}><Button><FcPrevious /></Button></span>
          <span onClick={Handler}><Button color={true}>
            {
              State===1?"":"Next"
            }
            </Button></span>
        </div>
        }
      </div>
        {
        State===1 && 
        <PersonalInfo/>
        }
         
        {
        State===2 && 
        <Summary/>
        }
        
        {
        State===3 && 
        <Skills/>
        }

        {
        State===4 && 
        <Experience2/>
        }

        {
        State===5 && 
        <Projects/>
        }
        
        {
        State===6 && 
        <Education/>
        }

    </div>
  )
}

export default FormSection