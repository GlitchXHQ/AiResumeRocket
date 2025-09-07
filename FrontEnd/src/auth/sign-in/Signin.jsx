import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import bgnd from "../../assets/bg/Background Image.png"
import logo from "../../assets/images/ChatGPT Image Aug 19, 2025, 11_32_29 AM.png"

const Signin = () => {
  return (    
    <div className="bg-[#160430] w-screen h-screen text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* Background (full on mobile, left half on desktop) */}
      <div
        className="relative w-full md:w-1/2 h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgnd})` }}
      >
        <img src={logo} alt="logo" className="absolute w-[150px] md:w-[200px] top-5 left-5" />
        
        <div className="hidden md:flex flex-col absolute bottom-10 left-10">
          <h1 className="font-bold text-4xl md:text-5xl">Sign In To Your Future</h1>
          <h1 className="font-bold text-2xl md:text-3xl mt-3 text-purple-400">Adventure</h1>
        </div>
      </div>

      {/* SignIn (over bg in mobile, separate in desktop) */}
      <div className="absolute inset-0 flex items-center justify-center md:static md:w-1/2 md:h-screen">
        <SignIn />
      </div>

    </div>
  )
}

export default Signin
