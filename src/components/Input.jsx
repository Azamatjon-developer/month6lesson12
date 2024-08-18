import React from 'react'

function Input({type,placeholder,name,extraStyle, isRequired, value, SetState}) {
  return (
    <div>
        <input required = {isRequired} value={value} onChange={(e)=>SetState(e.target.value)}  className={`pt-[13px]  pl-[26px] pr-[26px] pb-[13px] mt-[14px] border outline-none rounded-[5px] ${extraStyle}`} type= {type} placeholder={placeholder} name={name} />
    </div>
  )
}

export  {Input}
