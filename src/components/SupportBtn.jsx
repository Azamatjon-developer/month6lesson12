import React from 'react'
import { FaHeadphones } from "react-icons/fa";
import { VscChevronUp } from "react-icons/vsc";

function SupportBtn({title, extraClass}) {
  return (
    <div>
      <div className="bg-[#152259]  px-[20px] w-[200px]  rounded-md py-[10px] flex  justify-between items-center ">
        <div className="flex items-center gap-4">
        <div className="">
        <FaHeadphones className='text-white' />
        </div>
        <div className="">
      <button className={` font-kumbh font-semibold text-white `}> {title} </button>
        </div>  
       
        </div>
      <VscChevronUp className='text-white'/>
      </div>
    </div>
  )
}

export default SupportBtn
