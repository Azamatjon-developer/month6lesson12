import React from 'react'
import Saidbar from '../../components/Saidbar'
function InputForm() {
  return (
    <div className="flex justify-between items-start">
      <Saidbar />
      <div className='mt-[100px]'>
        <h2>Add teacher</h2>
      </div>
      <div>
        <form action="mt-[400px]">
            <p>Full Name</p>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Full Name' />

        </form>
      </div>
    </div>
  )
}

export default InputForm
