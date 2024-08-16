import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Teachers } from '../../pages/Dashboard'

function Index() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Dashboard/>} />
        <Route path='/teachers' element = {<Teachers/>} />
        <Route/>
      </Routes>
    </div>
  )
}

export default Index
