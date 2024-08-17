import React from 'react'
import Logo from '../assets/images/logo.svg'
import Home from '../assets/images/home.svg'
import Study from '../assets/images/Study.svg'
import BiLlingImage from '../assets/images/Billing.svg'
import Settings from '../assets/images/Settings.svg'
import ExamsImg from '../assets/images/Exams.svg'
import FeaturesImg from '../assets/images/Features.svg'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Saidbar() {
  return (
    <div className="w-[20%] h-screen overflow-y-auto   bg-[#152259] ">
      <div className="w-[100%]   text-[white]">
        <div className="mt-[26px] flex flex-col items-center ">
          <img src={Logo} alt="LogoImage" width={65} height={65} />
          <h2 className="mt-[12px] pb-[27px]">Udemy Inter. school</h2>
          <hr className="w-full h-[3px]" />
        </div>
        <div className="flex flex-col space-y-3 pt-[16px] pl-[30px]">
          <div className="flex items-center gap-[16px]">
            <NavLink to={'/'}>
              <img src={Home} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/'}>Dashboard</NavLink>
          </div>
          <div className="flex items-center gap-[16px]">
            <NavLink to={'/teachers'}>
              <img src={Home} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/teachers'}>Teachers</NavLink>
          </div>
          <div className="flex items-center gap-[16px]">
            <NavLink to={'/students'}>
              <img src={Study} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/students'}>Students</NavLink>
          </div>
          <div className="flex items-center gap-[16px]">
            <NavLink to={'/billing'}>
              <img src={BiLlingImage} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/billing'}>Billing</NavLink>
          </div>
          <div className="flex items-center gap-[16px]">
            <NavLink to={'/settings'}>
              <img src={Settings} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/settings'}>Settings and profile</NavLink>
          </div>
          <div className="flex items-center gap-[16px] pb-[100px]">
            <NavLink to={'/exams'}>
              <img src={ExamsImg} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/exams'}> Exams </NavLink>
          </div>
          <div className="flex items-center gap-[16px]">
            <NavLink to={'/features'}>
              <img src={FeaturesImg} alt="Home" width={16} height={16} />
            </NavLink>
            <NavLink to={'/features'}> Features </NavLink>
            <NavLink to={'/features'}>
              <button className="bg-[#B9D7F1] pt-[1px] pb-[1px] pl-[8px] pr-[8px] rounded-[8px] text-[#000000] text-[10px] font-kumbh font-semibold">
                NEW{' '}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Saidbar
