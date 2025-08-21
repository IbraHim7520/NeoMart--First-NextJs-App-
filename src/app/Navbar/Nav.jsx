"use client"
import Link from 'next/link';
import { React, useState } from 'react';
import Weblogo from '../Components/Weblogo';
import { IoMdLogIn } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='p-3 shadow navbar w-full flex justify-between items-center px-3 md:px-6 lg:px-12 xl:px-16 '>
            <Link href={"/"}>
                <Weblogo></Weblogo>
            </Link>

            <div className='hidden md:block'>
                <ul className='flex justify-center items-center gap-3 text-sm  xl:text-lg font-semibold'>
                    <Link className='hover:text-primary cursor-pointer. ' href={"/"}>Home</Link>
                    <Link className='hover:text-primary cursor-pointer. ' href={"/"}>Products</Link>
                    <Link className='hover:text-primary cursor-pointer. ' href={"/"}>Cart</Link>
                </ul>
            </div>

            <div className='hidden md:flex justify-center items-center gap-3'>
                <Link href={"/"} className='btn btn-sm px-5 btn-primary btn-outline'>Login <IoMdLogIn size={20} /></Link>
                <Link href={"/"} className='btn btn-sm px-5 btn-warning hover:text-white btn-outline'>Signup <CgLogIn size={20} /></Link>
            </div>

            <div className="relative md:hidden">
                <div
                    className="block md:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoCloseSharp size={25} /> : <IoMenu size={25} />}
                </div>

                <div
                    className={`absolute right-0 mt-2  bg-white shadow-lg rounded-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <ul className="flex font-semibold p-4 space-y-2 flex-col text-gray-700">
                        <Link className='hover:text-primary cursor-pointer. ' href={"/"}>Home</Link>
                        <Link className='hover:text-primary cursor-pointer. ' href={"/"}>Products</Link>
                        <Link className='hover:text-primary cursor-pointer. ' href={"/"}>Cart</Link>
                    <Link href={"/"} className='btn btn-sm px-5 btn-primary btn-outline'>Login <IoMdLogIn size={20} /></Link>
                    <Link href={"/"} className='btn btn-sm px-5 btn-warning hover:text-white btn-outline'>Signup <CgLogIn size={20} /></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

{/* */ }