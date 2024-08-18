import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Saidbar from '../../components/Saidbar'
import User from '../../assets/images/user.svg'
import Classes from '../../assets/images/Classes.svg'
import Students from '../../assets/images/Students.svg'
import Button from '../../components/Button'
import SupportBtn from '../../components/SupportBtn'
function Dashboard() {
  const token = true
  const { pathname } = useParams()

  return (
    <div className="">
      <div className="flex items-center justify-start flex-col ">
        <div className="pt-[44px] font-kumbh font-normal">
          <h3>Learn how to launch faster</h3>
          <p className='w-[536px] text-[#424242] font-kumbh font-medium pb-[68px] text-[16px]'>
            watch our webinar for tips from our experts and get a limited time
            offer.
          </p>
        </div>
        <div className="">
          <h2 className=" w-[776px] font-kumbh font-semibold text-[36px] mb-[23px]">
            Welcome to your dashboard, Udemy school
          </h2>
          <p className=" ml-[40px]  font-kumbh font-semibold text-[24px]">
            Uyo/school/@teachable.com
          </p>
          <div className=" flex items-center gap-[25px] mt-[68px] ml-[40px] ">
            <img src={User} alt="User" width={36} height={36} />
            <h3 className="text-[24px] font-kumbh font-medium text-[#4F4F4F]">
              Add other admins{' '}
            </h3>
          </div>
          <div className="w-[464px] mt-[16px] ml-[100px]">
            <p className='text-[#4F4F4F] text-[14px] font-kumbh font-normal'>
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
          <div className=" flex items-center gap-[25px] mt-[68px] ml-[40px] ">
            <img src={Classes} alt="User" width={36} height={36} />
            <h3 className="text-[24px] font-kumbh font-medium text-[#4F4F4F]">
              Add classes{' '}
            </h3>
          </div>
          <div className="w-[464px] mt-[16px] ml-[100px]">
            <p className='text-[#4F4F4F] text-[14px] font-kumbh font-normal'>
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
          <div className=" flex items-center gap-[25px] mt-[68px] ml-[40px] ">
            <img src={Students} alt="User" width={36} height={36} />
            <h3 className="text-[24px] font-kumbh font-medium text-[#4F4F4F]">
              Add students{' '}
            </h3>
          </div>
          <div className="w-[464px] mt-[16px] ml-[100px] mb-[150px]">
            <p className='text-[#4F4F4F] text-[14px] font-kumbh font-normal'>
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
            <SupportBtn title={'Support'} extraClass={'ml-[95%]'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard