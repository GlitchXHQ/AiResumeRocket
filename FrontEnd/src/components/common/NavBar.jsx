import React, { useRef } from 'react'
import "../../App.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const NavBar = () => {
  const nav = useRef();
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  useGSAP(() => {
    gsap.from(".text", {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
  }, { scope: nav });

  return (
    <div ref={nav} className="bg-[#ffffff] flex flex-row justify-between items-center border-b-2 w-[90%] mx-auto">
      <div className="cursor-pointer">
        <h1 
          className="logo text font-spaceGrotesk text-[20px]" 
          onClick={() => navigate("/")}
        >
          AiResume Rocket
        </h1>
      </div>

      <div className="flex flex-row gap-15">
        <h1 className="cursor-pointer text">Features</h1>
        <h1 className="cursor-pointer text">About Us</h1>
      </div>

      <div className="flex flex-row gap-5 cursor-pointer items-center">
        <div className="text">
          {isLoaded && (isSignedIn 
            ? <UserButton/>
            : <h1 onClick={() => navigate("/auth/sign-in")}>Login</h1>
          )}
        </div>

        <button 
          className="cursor-pointer text border-gray-400 border items-center rounded-sm p-0.5 mb-1"
          onClick={() => navigate(isSignedIn ? "/add-resume" : "/auth/sign-in")}
        >
          Create Resume
        </button>
      </div>
    </div>
  )
}

export default NavBar
