import React from 'react'
import { navlinks } from '../../Data'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    <nav className=''>
      <ul>
        <li className='flex items-center gap-6'>
          {
            navlinks.map((item,index)=>{
              return(
                <Link href={"/"} key={index} className='text-lg hover:bg-white px-5 text-balance hover:text-orangePrimary hover:shadow-md hover:transition-all py-2 hover:rounded-md text-heading capitalize font-medium '>{item.name}</Link>
              )
            })
          }
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNav