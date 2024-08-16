import { useContext } from 'react'
import { Context } from './Context/Context'
import {
  Billing,
  Dashboard,
  Exams,
  Features,
  Settings,
  Students,
  Teachers,
} from './pages/Dashboard'

import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from './pages/Login'
import './App.css'
import Header from './components/Header'

function App() {
  const { token } = useContext(Context)
  return (
    <>
    <Header/>
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
      </Routes>
    </>
  )
}

export default App
