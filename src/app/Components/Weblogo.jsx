"use client"
import React from 'react';
import weblogo from "/WebLogo.png"
import Image from 'next/image';
const Weblogo = () => {
    return (
        <div className='flex items-center justify-center gap-2'>
              <Image alt='WebLogo' className='w-8' src={weblogo}>
                </Image>      
        <p className='text-xl font-bold'>NeoMart</p>
        </div>
    );
};

export default Weblogo;