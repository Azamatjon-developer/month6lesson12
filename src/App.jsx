import { useContext, useEffect, useState } from 'react'
import { Context } from './Context/Context'
import {
  Dashboard,
  Billing,
  Exams,
  Features,
  Settings,
  Students,
  Teachers,
  AboutTeachers,
} from './pages/Dashboard'

import InputForm from './pages/Dashboard/InputForm'

import { Route, Routes, useLocation } from 'react-router-dom'
import { SignIn, SignUp } from './pages/Login'
import './App.css'
import Header from './components/Header'
import Saidbar from './components/Saidbar'

function App() {
  const { token } = useContext(Context)
  const [showsidebar, setShowSidebar] = useState(false)

  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname.includes('/sign-up') || pathname.includes('/login')) {
      setShowSidebar(true)
    } else {
      setShowSidebar(false)
    }
  }, [])

  return (
    <div className="flex">
      <div className={`flex  ${showsidebar ? 'hidden' : ''}`}>
        <Saidbar className={`w-[20%]`} />
      </div>
      <div className={` ml-[20%] w-[80%] ${ showsidebar ? "w-full" : ""}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/features" element={<Features />} />
          <Route path="/inputform" element={<InputForm />} />
          <Route path="/about-teachers" element={<AboutTeachers />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
