"use client"
import Link from 'next/link';
import React from 'react';
import { LoginUser } from '../utils';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    const loginUser = () =>{
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const pass = form.password.value;
        const result = LoginUser(email , pass);
        if(result=== "Login success"){
            toast.success(result)
            router.push("/")
        }else{
            toast.error(result)
            form.reset()
        }
    }
    return (
        <div className='w-full h-screen bg-base-200 flex flex-col justify-center items-center'>
            <Toaster></Toaster>
            <form onSubmit={(e)=>loginUser(e)} className='min-w-96 p-5 min-h-3/5 rounded-xl shadow  bg-white'>
                <h1 className='text-center text-3xl font-bold'>Welcome Back</h1>
            
            
                <div className='flex space-y-3 flex-col items-start justify-center w-full h-full'>

                    <div className='w-full'>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='email' className='w-full input' />
                </div>

                <div className='w-full'>
                    <label>Password</label>
                    <input placeholder='password' name='password' type='password' className='input  w-full'/>
                </div>

                <button className='btn w-full btn-success text-white' type='submit'>Login</button>
               <p className='text-end w-full '>Already user? <Link href={"/Signup"} className='link link-hover text-blue-500'>Signup</Link></p>
                </div>

            </form>
       
        </div>
    );
};

export default page;