import React from 'react'

function Input({type,placeholder,name,extraStyle, isRequired}) {
  return (
    <div>
        <input required = {isRequired} onChange={(e) => inputVal} className={`pt-[13px]  pl-[26px] pr-[26px] pb-[13px] mt-[14px] border-none rounded-[5px] ${extraStyle}`} type= {type} placeholder={placeholder} name={name} />
    </div>
  )
}

export  {Input}
