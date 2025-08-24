"use client"
import Image from 'next/image';
import React from 'react';
import Slider1 from "/images/slider-1.png"
import { FaArrowRightLong } from "react-icons/fa6";

import Link from 'next/link';
const BannerSection = () => {
    return (
        <div className='mx-auto w-full relative px-3 md:px-6 lg:px-12 xl:px-16'>
            <Image src={Slider1} alt='Slider iamge 1' priority className=' object-cover h-64 md:h-fit rounded-2xl'>
            </Image>
           
           <div className="absolute space-y-1 md:space-y-3 inset-0 flex flex-col items-start justify-center xl:left-30 left-10 lg:left-25 md:left-20">
        <h1 className=" text-2xl text-gray-700 md:text-4xl lg:text-5xl font-bold text-start">
          Don't miss<br></br>amazing Deals
        </h1>
        <p className='text-sm md:text-lg xl:text-xl  font-semibold text-gray-400'>Signup for daily newsletter</p>
        <Link className='btn btn-xs lg:px-12  lg:btn-md btn-success  text-white' href={"/Signup"}>Regigster Now <FaArrowRightLong className='text-sm lg:text-lg'></FaArrowRightLong></Link>
      </div>
        </div>
    );
};

export default BannerSection;