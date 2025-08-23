"use client"
import ReviewCard from '@/app/Cards/ReviewCard';
import axios from 'axios';
import { useParams , useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const {id} = useParams()
    const route = useRouter()
    const isLoggein = true // Convert this with my auth status
    const [oneProduct , setOneProduct] = useState(null);
    useEffect( ()=>{
       const getOneData =async()=>{
        if(!isLoggein){
            route.push("/Login")
            return
        }else{
            const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/oneproduct/${id}`)
            setOneProduct(product?.data)
        }
       }
       getOneData()
    }, [] )

    console.log(oneProduct)

    return (
        <div className=" w-full  mx-auto px-3 md:px-6 lg:px-12 xl:px-16 ">
            <p>
                <span>Home</span> /
                <span> Details</span> /
                <span className='text-primary'> {oneProduct?.category}</span> 
            </p>

            <div className="flex flex-col  justify-center py-12 md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={oneProduct?.image} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{oneProduct?.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                            oneProduct?.rating > i ? 
                                <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="#615fff" />
                                </svg>
                            : 
                                <svg key={i} width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"  />
                                </svg>
                            
                        ))}
                        <p className="text-base ml-2">({oneProduct?.rating})</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: ${oneProduct?.price * oneProduct?.discount }</p>
                        <p className="text-2xl font-medium">MRP: ${oneProduct?.price}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">Weight</p>
                    <div>
                        {
                            oneProduct?.weight.length == 0 ?
                            "N/A"
                            :
                            <div className='flex w-full gap-3 mt-2'>
                                {
                                    oneProduct?.weight.map((ww,ind)=> <button key={ind} className='btn btn-sm '>{ww}</button>)
                                }
                            </div>
                        }
                    </div>
                    

                    <div className="flex items-center justify-start w-full  mt-10 gap-4 text-base">
                        <button className="btn btn-primary px-12" >
                            Add to cart 
                        </button>
                        <button className="btn btn-primary px-12" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            

            <div className='w-full space-y-2 flex flex-col  text-start'>
                <h2 className='text-3xl font-medium'>Additional Information</h2>
                <h1 className='text-xl mt-8 font-semibold text-gray-700'>Descripption</h1>
                <p>{oneProduct?.description}</p>
                <p className='text-gray-700'>Production date: {oneProduct?.createDate}</p>
                <p className='text-gray-700'>Expirey date: {oneProduct?.expiryDate}</p>
                <h1 className='text-xl mt-8 font-semibold text-gray-700'>Reviews</h1>
                <div className='w-full'>
                        {
                            oneProduct?.reviews.length == 0 ? 
                            <div className='w-full py-8 '>
                                <p>No Reviews Yet</p>
                            </div>
                            :
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:flex justify-start items-center gap-5'>
                                {
                                    oneProduct?.reviews.map( (rev, inc)=>
                                        <ReviewCard key={inc} rev={rev}></ReviewCard>
                                    )
                                }
                            </div>
                        }
                </div>
            </div>



        </div>
    );
};

export default page;