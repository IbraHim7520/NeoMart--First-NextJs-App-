"use client"
import React from 'react';
import Image from 'next/image';
const Weblogo = () => {
    return (
        <div className='flex items-center justify-center gap-2'>
              <Image alt='WebLogo' className='w-8' src={"/WebLogo.png"}>
                </Image>      
        <p className='text-xl font-bold'>NeoMart</p>
        </div>
    );
};

export default Weblogo;