import React, { useRef, useState } from 'react'
import "../../App.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import { FiMenu, FiX } from "react-icons/fi"

const NavBar = () => {
  const nav = useRef();
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".text", {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
  }, { scope: nav });


  const Handler=()=>{
    setMenuOpen(false)
    navigate("/dashboard/contact")
  }

  const Handler2=()=>{
    setMenuOpen(false)
    navigate("/dashboard/about")
  }

  return (
    <div 
      ref={nav} 
      className="bg-white flex justify-between items-center border-b-2 w-[90%] mx-auto py-3 px-2"
    >
      {/* Logo */}
      <div className="cursor-pointer">
        <h1 
          className="logo text font-spaceGrotesk text-xl md:text-2xl" 
          onClick={() => navigate("/")}
        >
          AiResume Rocket
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row gap-10">
        <h1 className="cursor-pointer text" onClick={Handler}>Contact Us</h1>
        <h1 className="cursor-pointer text" onClick={Handler2}>About Us</h1>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-row gap-4 items-center">
        <div className="text">
          {isLoaded && (isSignedIn 
            ? <UserButton/>
            : <h1 onClick={() => navigate("/auth/sign-in")}>Login</h1>
          )}
        </div>
        <button 
          className="cursor-pointer text border-gray-400 border rounded-sm px-2 py-1"
          onClick={() => navigate(isSignedIn ? "/add-resume" : "/auth/sign-in")}
        >
          Create Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white border-t flex flex-col gap-4 py-4 px-6 md:hidden z-50">
          <h1 className="cursor-pointer text" onClick={Handler}>Contact Us</h1>
          <h1 className="cursor-pointer text" onClick={Handler2}>About Us</h1>
          <div className="text">
            {isLoaded && (isSignedIn 
              ? <UserButton/>
              : <h1 onClick={() => {navigate("/auth/sign-in"); setMenuOpen(false)}}>Login</h1>
            )}
          </div>
          <button 
            className="cursor-pointer text border-gray-400 border rounded-sm px-2 py-1"
            onClick={() => {
              navigate(isSignedIn ? "/add-resume" : "/auth/sign-in");
              setMenuOpen(false);
            }}
          >
            Create Resume
          </button>
        </div>
      )}
    </div>
  )
}

export default NavBar
