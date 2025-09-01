import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import bgnd from "../../assets/bg/Background Image.png"
import logo from "../../assets/images/ChatGPT Image Aug 19, 2025, 11_32_29 AM.png"

const Signin = () => {
  return (    
    <div className="bg-[#160430] w-screen h-screen text-white flex flex-row overflow-hidden">
      {/* Right */}
      <div
        className="relative w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgnd})` }}
      >
        <img src={logo} alt="logo" className="absolute w-[200px] top-5 left-5" />
        
        <div className="flex flex-col absolute bottom-10 left-10">
          <h1 className="font-bold text-5xl">Sign In To Your Future</h1>
          <h1 className="font-bold text-3xl mt-3 text-purple-400">Adventure</h1>
        </div>
      </div>

      {/* Left */}
      <div className="w-1/2 h-screen flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  )
}

export default Signin
