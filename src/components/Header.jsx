import React from 'react'
import Remind from "../assets/images/remind.svg"
function Header() {
  return (
    <div className='flex items-center gap-[15px]' style={{position: "absolute" , position: "fixed"}}>
        <img style={{position: "relative", top: "30px" , left: "982px"}} src={Remind} alt="remind" />
        <button className='pt-[11px] pl-[30px] pb-[11px] pr-[30px] border-[0.1px] border-slate-500' style={{position: "relative", top: "30px" , left: "982px"}}>Log out</button>
    </div>
  )
}

export default Header
