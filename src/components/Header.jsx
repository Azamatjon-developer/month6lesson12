import React from 'react'
import Remind from "../assets/images/remind.svg"
import { useLocation } from 'react-router-dom'

function Header() {
  let { pathname } = useLocation()
  if (pathname.includes('/login') || pathname.includes('/sign-up')) {
    return null
  }

  return (
    <div className='flex items-center w-full justify-end pr-[30px] py-[20px] bg-white z-50'> 
      <div className="flex items-center gap-2">
        <img src={Remind} alt="remind" />
        <button className='pt-[12px] pb-[12px] pr-[35px] pl-[35px] border-[0.1px] font-kumbh font-semibold text-[14px] border-slate-500'>
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
