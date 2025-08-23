"use client"
import Link from 'next/link';
import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({product}) => {
    return (
        <div className="flex flex-col bg-white shadow-md  max-h-90 max-w-70">
    <img className='w-full h-36 object-cover  '
        src={product?.image}
        alt="image" />
    <div className="p-2 flex flex-col justify-between  text-sm">
        <div className='flex justify-between items-center'>
            <p className="text-slate-600">$ {product?.price}</p>
            <p className="text-slate-600">{product?.rating}</p>
        </div>
       <div className='w-full'>
         <p className="text-slate-800 text-base font-medium my-1.5">{product?.name}</p>
        <p className="text-slate-500">{product?.description.split(" ").slice(0, 10).join(" ")}.....</p>
        <div className="flex justify-end mt-3 items-center gap-2">
            <button className='btn bg-white border-none '><MdAddShoppingCart size={20}/></button>
            <Link href={`/Details/${product?._id}`} className='btn btn-sm btn-success text-white '>Details</Link>
        </div>
       </div>
    </div>
</div>
    );
};

export default ProductCard;