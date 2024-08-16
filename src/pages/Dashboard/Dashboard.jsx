import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Saidbar from '../../components/Saidbar'
import User from "../../assets/images/user.svg"
function Dashboard() {
  const token = true
  const navigate = useNavigate()
  const { pathname } = useParams()

  return (
    <div className='flex'>
      <Saidbar/>
      <div className='w-[80%]'>
        <div className='mt-[100px] ml-[147px] inline-block font-kumbh font-normal'>
          <h3>Learn  how to launch faster</h3>
          <p>watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
        <div className='mt-[53px] ml-[107px] '>
          <h2 className='font-kumbh font-semibold text-[36px]'>Welcome to your dashboard, Udemy school</h2>
          <p className='mt-[23px] ml-[40px]  font-kumbh font-semibold text-[24px]'>Uyo/school/@teachable.com</p>
          <div className=' flex items-center gap-[25px] mt-[68px] ml-[40px] '>
              <img src={User} alt="User" width={36} height={36} /> 
              <h3 className='text-[24px] font-kumbh font-medium text-[#4F4F4F]'>Add other admins </h3>
          </div>
          <div className='w-[464px] mt-[16px] ml-[100px]'>
          <p>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
          <div className=' flex items-center gap-[25px] mt-[68px] ml-[40px] '>
              <img src={User} alt="User" width={36} height={36} /> 
              <h3 className='text-[24px] font-kumbh font-medium text-[#4F4F4F]'>Add other admins </h3>
          </div>
          <div className='w-[464px] mt-[16px] ml-[100px]'>
          <p>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
          <div className=' flex items-center gap-[25px] mt-[68px] ml-[40px] '>
              <img src={User} alt="User" width={36} height={36} /> 
              <h3 className='text-[24px] font-kumbh font-medium text-[#4F4F4F]'>Add other admins </h3>
          </div>
          <div className='w-[464px] mt-[16px] ml-[100px]'>
          <p>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
