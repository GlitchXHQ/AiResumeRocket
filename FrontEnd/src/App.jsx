import { SignIn, useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavBar from './components/common/NavBar'
import "./App.css"
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='mt-3'><NavBar/></div>
      <Outlet/>
      <Toaster />
    </div>
  )
}

export default App