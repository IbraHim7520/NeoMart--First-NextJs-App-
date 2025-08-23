"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from '../Cards/ProductCard';
import axios from 'axios';
const  PopularProducts =  () => {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(  ()=>{
      const fetchData = async()=>{
          const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/top-product`)
          if( data?.data.lenhth != 0 ){
            setLoading(false)
            setProducts(data?.data)
          }else{
            setLoading(false)
            setProducts([])
          }
      }
      fetchData()
    }, [] )
    return (
        <div className='mx-auto mt-8 md:mt-12 flex flex-col justify-items-center px-3 md:px-6 lg:px-12 xl:px-16'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-700 text-xl lg:text-2xl xl:text-3xl font-semibold'>Popular Items</h1>
            <Link href={"/Products"} className='btn btn-success btn-outline hover:text-white btn-sm'>
            View All
            <FaArrowRightLong />
            </Link>
            </div>

            <div className='mt-5 w-full'>
                {
                    loading ? 
                    <div className='w-full flex justify-center items-center flex-col min-h-60'>
                        <span className='loadin loading-spinner text-success'></span>
                        <p>Loading Data....</p>
                    </div>
                    :
                    <div className='w-full'>
                            {
                                products.length == 0 ?
                                <div></div>
                                :
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-2 space-y-2'>
                                    {
                                        products.map( (product)=> 
                                        <ProductCard 
                                        key={product._id}
                                        product={product}
                                        /> 
                                        
                                        )
                                    }
                                </div>
                            }
                    </div>
                }
            </div>
        </div>
    );
};

export default PopularProducts;