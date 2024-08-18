import React from 'react'
import AboutGirl from '../../assets/images/AboutGirl.png'
import About1 from '../../assets/images/AboutCardOne.svg'
import About2 from '../../assets/images/AboutCardTwo.svg'

function AboutTeachers() {
  return (
    <div className='flex items-center justify-center space-x-[105px] mt-[30px]'>
        <div className='pt-[66px] text-center'>
            <img src={AboutGirl} alt="About girl" width={280} height={280} />
            <h2 className='pt-[50px] text-[#1A1A1A] font-kumbh font-semibold text-[20px]'>Kristin Watson</h2>
            <p className='text-[#A7A7A7] font-kumbh font-semibold pt-[10px]'>Chemistry teacher</p>
            <div className='flex items-center gap-[25px]'>
            <img className='pt-[40px]' src={About1} alt="About1" width={60} height={60} />
            <img className='pt-[40px]' src={About2} alt="About1" width={60} height={60} />
            <img className='pt-[40px]' src="../../../public/About3.svg" alt="About1" width={60} height={60} />
            </div>
            <div>
            </div>
        </div>
        <div>
            <h2 className='text-[20px] font-kumbh font-semibold mb-[16px] text-[#1A1A1A]'>About</h2>
            <p className='w-[335px] h-[197px] text-[#A7A7A7] font-kumbh font-medium text-[16px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
            <div className='mt-[40px] flex items-center justify-between'>
                <div>
                <h3>Age</h3>
                <p className='text-[#A7A7A7] font-kumbh font-medium text-[16px] pt-[8px]'>34</p>

                </div>
                <div>
                <h3>Gender</h3>
                <p className='text-[#A7A7A7] font-kumbh font-medium text-[16px] pt-[8px]'>male</p>

                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutTeachers
