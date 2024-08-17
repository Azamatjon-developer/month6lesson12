import { useContext } from 'react'
import { Context } from './Context/Context'
import {
  Billing,
  Dashboard,
  Exams,
  Features,
  Settings,
  Students,
  Teachers
} from './pages/Dashboard'
import InputForm from './pages/Dashboard/InputForm'

import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from './pages/Login'
import './App.css'
import Header from './components/Header'
import Saidbar from './components/Saidbar'

function App() {
  const { token } = useContext(Context)
  return (
    <div className='flex'>
        <Saidbar/>
      <div className='w-[80%]'>
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
          <Route path='/inputform' element={<InputForm/>} />
        </Routes>
      </div>
    
    </div>
  )
}

export default App
