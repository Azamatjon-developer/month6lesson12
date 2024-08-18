import React from 'react'
import Button from '../../components/Button'
import SearchIcon from '../../assets/images/Search.svg'
import NoTeachers from '../../assets/images/NoTeachers.png'
import { Link } from 'react-router-dom'
import SupportBtn from '../../components/SupportBtn'
import AboutTeachers from './AboutTeachers'
function Teachers() {
  const TeachersData = JSON.parse(localStorage.getItem('teachers')) || []
  const TeachersMap = TeachersData?.map((teacher, index) => (
    <tr>
      <Link to={'/about-teachers'} element={<AboutTeachers />}>
        <td className="w-[180px] ">{teacher.FullName}</td> 
      </Link>
      <td className="w-[180px] h-[48px] text-center pb-3">
        {teacher.Class}
      </td>
      <td className="w-[180px] h-[48px] text-center pb-3">
        {teacher.Subject}
      </td>
      <td className="w-[180px] h-[48px] text-center pb-3">
        {teacher.Email}
      </td>
      <td className="w-[180px] h-[48px] text-center pb-3">
        {teacher.Gender}
      </td>
    </tr>
  ))
  return (
    <>
      <div className="flex items-start gap-[20px] ">
        <div className="w-[90%]  h-screen overflow-y-auto pl-[58px]">
          <div className="flex justify-between relative pr-[60px]">
            <h2 className=" font-kumbh font-medium text-[20px]">Teachers</h2>
            <Link to={'/inputform'}>
              <Button
                extraClass={
                  'pt-[12px] pb-[12px] pr-[14px] pl-[14px] rounded-[8px]'
                }
                title={'Add Teachers'}
              />
            </Link>
          </div>
          <div className="py-[14px] flex flex-col gap-[20px]">
            <div className="mx-[20px] px-[20px] mt-[24px] flex items-center  rounded-lg border-[1px] border-gray-400">
              <img src={SearchIcon} alt="search icon " width={16} height={16} />
              <input
                className="w-[100%] pt-[16px] pb-[16px] pl-[48px] pr-[20px] outline-none "
                type="text"
                placeholder="Search for a student by name or email"
              />
            </div>
            {TeachersData.length ? (
              <table className="">
                <thead className="">
                  <tr className="w-[180px] ">
                    <th className="w-[180px] border-[1px] border-slate-500 pt-[16px] pb-[16px]">
                      Name
                    </th>
                    <th className="w-[180px] border-[1px] border-slate-500 pt-[16px] pb-[16px]">
                      Subject
                    </th>
                    <th className="w-[180px] border-[1px] border-slate-500 pt-[16px] pb-[16px]">
                      Class
                    </th>
                    <th className="w-[180px] border-[1px] border-slate-500 pt-[16px] pb-[16px]">
                      {' '}
                      Email address
                    </th>
                    <th className="w-[180px] border-[1px] border-slate-500 pt-[16px] pb-[16px]">
                      {' '}
                      Gender
                    </th>
                  </tr>
                </thead>
                <tbody className=''>{TeachersMap}</tbody>
              </table>
            ) : (
              <img className="m-auto " src={NoTeachers} alt="NoTeachers" />
            )}

            <div className="flex justify-end pt-[90px]">
              <SupportBtn extraClass={''} title={'Support'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teachers
