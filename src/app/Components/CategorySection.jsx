"use client"
import React from 'react';
import vegCat from "../../../images/cat-1.png"
import fastfoodCat from "../../../images/cat-13.png"
import fruitCat from "../../../images/cat-2.png"
import snacksCat from "../../../images/cat-3.png"
import coffeeCat from "../../../images/cat-14.png"
import { FaArrowRightLong } from "react-icons/fa6";

import OnionImg from "../../../images/banner-onion.png"
import milkImg from "../../../images/banner-milk.png"
import VegiImg from "../../../images/banner-vegi.png"
import Image from 'next/image';
const CategorySection = () => {
    const Categories = [
        {
            id: 1,
            Image: vegCat,
            Title: "Vegitables",
            bg: "#F2FCE4"
        },
        {
            id: 2,
            Image: fastfoodCat,
            Title: "Foods",
            bg: "#FFF3FF"
        },
        {
            id: 3,
            Image: fruitCat,
            Title: "Fruits",
            bg: "#FEEFEA"
        },
        {
            id: 4,
            Image: snacksCat,
            Title: "Snacks",
            bg: "#F2FCE4"
        },
        {
            id: 5,
            Title: "Coffee",
            Image: coffeeCat,
            bg: "#FFF3FF"
        },
    ]
    return (
        <div className='mx-auto flex flex-col justify-items-center  mt-8 md:mt-12  px-3 md:px-6 lg:px-12 xl:px-16'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-700 text-xl lg:text-2xl xl:text-3xl font-semibold'>Featured Categories</h1>
            </div>

            <div className='flex mt-5 justify-between
             items-center w-full gap-3 lg:gap-0 overflow-x-scroll '>
                 {Categories.map((category) => (
          <div
            key={category.id} // always add a key when mapping
            className="p-2 flex flex-col min-w-36 h-38  justify-center items-center space-y-2"
            style={{ backgroundColor: category.bg, borderRadius: "12px" }}
          >
            <Image
              src={category.Image}
              alt={category.Title}
              width={80}      // adjust size as needed
              height={80}
            />
            <p className="text-gray-700 font-medium">{category.Title}</p>
          </div>
        ))}
            </div>

            <div className='mt-5 grid grid-cols-1 w-full  justify-items-center md:flex justify-center items-center gap-4'>
                
                <div className='p-4 relative rounded-xl flex flex-col justify-center items-start w-full bg-[#F1EAD9] h-fit'>
                    <Image src={OnionImg} alt='Onion Banner' className='object-cover'/>
                    <div className='absolute space-y-3 w-2/4'>
                        <h1 className='text-2xl xs:text-lg 2xl:text-3xl font-bold text-gray-700 '>Everyday Fresh and Clean Our Products</h1>
                        <button className='btn btn-success text-white btn-sm text-xs' >
                            Shop Now
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

                <div className='p-4 relative rounded-xl flex flex-col justify-center items-start  w-full bg-[#F3E8E8] h-fit'>
                    <Image src={milkImg} alt='Milk Banner' className='object-cover' />
                    <div className='absolute space-y-3 w-2/4'>
                        <h1 className='text-2xl 2xl:text-3xl font-bold text-gray-700 '>Make Your Breakfast Healthy and Easy</h1>
                        <button className='btn btn-success text-white btn-sm text-xs' >
                            Shop Now
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

                 <div className='p-4 relative md:hidden  rounded-xl flex  lg:flex flex-col justify-center items-start  w-full bg-[#E9ECF4] h-fit'>
                    <Image src={VegiImg} alt='Vegitable Banner' className='object-cover' />
                   <div className='absolute space-y-3 w-2/4'>
                        <h1 className='text-2xl 2xl:text-3xl font-bold text-gray-700 '>The Best Organic Products Online</h1>
                        <button className='btn btn-success text-white btn-sm text-xs' >
                            Shop Now
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CategorySection;