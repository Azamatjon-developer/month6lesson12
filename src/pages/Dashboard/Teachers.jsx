import React from 'react'
import Saidbar from '../../components/Saidbar'
import Button from '../../components/Button'
import SearchIcon from "../../assets/images/Search.svg"
import NoTeachers from "../../assets/images/NoTeachers.png"
import { Link } from 'react-router-dom'
import SupportBtn from '../../components/SupportBtn'
function Teachers() {
  return (
    <div className="flex items-start gap-[20px] ">
      <Saidbar />
      <div className="block h-screen overflow-y-auto ">
        <div className="flex justify-between relative top-[40px] pr-[60px] py-[60px]">
          <h2 className="text-center font-kumbh font-medium text-[20px]">
            Teachers
          </h2>
          <Link to={'/inputform'}>
          <Button
            extraClass={'pt-[12px] pb-[12px] pr-[14px] pl-[14px] rounded-[8px]'}
            title={'Add Teachers'}
          /></Link>
          
          
        </div>
        <div className='py-[80px] '>
        <div className='mx-[20px] px-[20px] mt-[24px] flex items-center  rounded-lg border-[1px] border-gray-400'>
        <img src={SearchIcon} alt="search icon " width={16} height={16} />
        <input className='w-[100%] pt-[16px] pb-[16px] pl-[48px] pr-[20px] outline-none  ' type="text" placeholder='Search for a student by name or email' />
        </div>
        <img className='m-auto ' src= {NoTeachers} alt="NoTeachers" />
       <div className="flex justify-end px-[20px]">
       <SupportBtn extraClass={"ml-[100px]"} title={"Support"}/>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers
