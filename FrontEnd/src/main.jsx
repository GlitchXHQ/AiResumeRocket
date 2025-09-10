import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signin from './auth/sign-in/Signin'
import HomePage from './components/home/HomePage'
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard from './components/dashboard/Dashboard'
import AddResume from './components/addResume/AddResume'
import EditResume from './components/dashboard/resume/[resumeId]/edit/page.jsx'
import ViewResume from './components/resumeView/view/ViewResume.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ChooseResume from './components/dashboard/resume/[resumeId]/chooseResume/ChooseResume'
import ResumePage from './components/dashboard/resume/[resumeId]/edit/ResumePage'
import {View } from 'lucide-react'
import About from './components/common/about.jsx'
import Contact from './components/common/contact.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/resume/:documentId/edit',
        element: <ResumePage/>, 
      },
      {
        path: '/add-resume',
        element: <AddResume />,
      },
      {
        path:'/dashboard/resume/:documentId/chooseResume',
        element:<ChooseResume/>
      },
      {
        path:'/dashboard/resume/:documentId/viewResume',
        element:<ViewResume/>
      },
      {
        path:'/dashboard/about',
        element:<About/>
      },
      {
        path:'/dashboard/contact',
        element:<Contact/>
      },           
    ],
  },
  {
    path: '/auth/sign-in',
    element: <Signin />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
