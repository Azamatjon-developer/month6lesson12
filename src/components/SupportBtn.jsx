import React from 'react'
import { FaHeadphones } from 'react-icons/fa'
import { VscChevronUp } from 'react-icons/vsc'

function SupportBtn({ title, extraClass }) {
  return (
    <div>
      <div
        className={`bg-[#152259]  px-[20px] w-[180px]  rounded-[30px] pt-[21px] pl-[39px] pb-[21px] pr-[39px] flex  justify-between items-center ${extraClass} `}
      >
        <div className="flex items-center gap-4">
            <FaHeadphones className="text-white" />
          <div className="">
            <button className={` font-kumbh font-semibold text-white `}>
              {' '}
              {title}{' '}
            </button>
          </div>
        </div>
        <VscChevronUp   className="text-white w-[16px]" />
      </div>
    </div>
  )
}

export default SupportBtn
