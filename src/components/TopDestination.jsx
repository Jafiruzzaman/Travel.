import React from "react";
import Common from "./Common";
import { DestinationData } from "../../Data";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
const TopDestination = () => {
  return (
    <section className="container mx-auto xl:my-24">
      <Common
        divStyle={`my-5 text-center mx-auto`}
        spanText={`top destinations`}
        headingText={`explore top destination`}
        headingStyle={`my-6 text-5xl`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {DestinationData.map((item, index) => {
          return (
            <div className="rounded-[2rem] bg-white shadow-lg pb-7 mt-5" key={index}>
              <Image
                src={item.image}
                className="h-64 bg-cover  rounded-tl-[2rem] rounded-tr-[2rem]"
                alt="top destination image"
              />
              <div className="my-4 px-5">
                <h3 className="text-heading text-lg capitalize">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-orangePrimary text-xl flex items-center mt-2">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                  </div>
                  {/* price */}
                  <span className="text-orangePrimary font-semibold">{item.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopDestination;
