import React from 'react'
import { HeroFormData } from '../../Data'
import { CiSearch } from "react-icons/ci";

const HeroForm = () => {
  return (
    <form method='post' className='flex items-center gap-4 px-8 py-10 rounded-2xl shadow-lg bg-white mt-8'>
      {
        HeroFormData.map((item,index)=>{
          return(
            <div className="flex flex-col gap-3" key={index}>
              <h4 className='text-lg capitalize text-heading font-semibold'>{item.title}</h4>
              <input type={item.type} className='w-60 px-3 py-1 border-transparent border-2 rounded-md hover:border-orangePrimary outline-none ' placeholder={item.input} />
            </div>
          )
        })
      }
      <div className="xl:ml-5 bg-greenPrimary p-5 rounded-xl cursor-pointer">
      <CiSearch className='text-4xl text-white'/>
      </div>
    </form>
  )
}

export default HeroForm