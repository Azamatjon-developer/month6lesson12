import React from 'react'

function Button({ title, type,extraClass }) {
  return (
    <button type={type} className={`pt-[12px] pl-[14px] pr-[14px] pb-[11px] bg-[#2D88D4] text-white rounded-sm ${extraClass}`}>
        {title}
    </button>
  )
}

export default Button
