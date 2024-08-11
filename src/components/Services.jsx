import React from 'react'
import Common from './Common'
import { ServicesData } from '../../Data'
import Image from 'next/image'
import carImage from "/public/car.png"
import blob from "/public/svg/blob-02.svg"
const Services = () => {
  return (
    <section className='relative xl:my-36'>
      <div className="flex items-center justify-between lg:flex-row flex-col container mx-auto">
        {/* text */}
        <div className="">
          <Common spanText={`how we work`} headingText={`we offer best services`} headingStyle={`font-semibold text-3xl`}/>

        {/*  */}
        <div className="flex flex-col">
          {
            ServicesData.map((item,index)=>{
              return(
                <div className="flex items-center gap-3 my-2" key={index}>
                    <div className="p-5 bg-white shadow-lg rounded-lg text-2xl text-orangePrimary">
                      {item.icon}
                    </div>
                    <div className="">
                      <h4 className='text-xl font-semibold text-heading capitalize'>{item.heading}</h4>
                      <p className="p">{item.paragraph}</p>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* image */}
      <div className="absolute right-[13rem]">
        <Image src={carImage} alt='car'/>
      </div>
      {/* blob */}
      <div className="bottom-0  top-10 right-0 -z-10 absolute">
          <Image src={blob} alt='car image'/>
      </div>
      </div>
    </section>
  )
}

export default Services