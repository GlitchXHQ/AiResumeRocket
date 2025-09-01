import React from 'react'

const Button = ({ children,color }) => {
  return (
    <button
      className={`
        ${(color===true)?"bg-blue-500":"bg-gray-500"} 
        text-white 
        px-4 py-2 
        rounded-lg 
        cursor-pointer 
        border ${(color===true)?"border-blue-600":"border-black"} 
        shadow-lg shadow-blue-500/40 
        backdrop-blur-md 
        transition-all duration-300 
        border ${(color===true)?"hover:bg-blue-600":"hover:bg-gray-600"} 

        hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] 
        active:scale-95
        `}
    >
      {children}
    </button>
  )
}

export default Button
