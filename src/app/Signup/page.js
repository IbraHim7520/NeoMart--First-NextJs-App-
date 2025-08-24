"use client"
import Link from 'next/link';
import React from 'react';
import { CreateUser } from '../utils';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter()
    const createuser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value
        const pass = form.password.value
        CreateUser(name , email , pass);
        toast.success("Signup success")
        router.push("/")
     
    }
    return (
        <div className='w-full h-screen bg-base-200 flex flex-col justify-center items-center'>
            <Toaster></Toaster>
            <form onSubmit={(e)=>createuser(e)} className='min-w-96 p-5 min-h-3/5 rounded-xl shadow  bg-white'>
                <h1 className='text-center text-3xl font-bold'>Welcome</h1>

                <div className='flex space-y-3 flex-col items-start justify-center w-full h-full'>
                    <div className='w-full'>
                        <label>Username</label>
                        <input type='text' name='name' placeholder='email' className='w-full input' />
                    </div>
                    <div className='w-full'>
                        <label>Email</label>
                        <input type='email' name='email' placeholder='email' className='w-full input' />
                    </div>
                    <div className='w-full'>
                        <label>Password</label>
                        <input placeholder='password' name='password' type='password' className='input  w-full' />
                    </div>

                    <button className='btn w-full btn-success text-white' type='submit'>Create Account</button>
                    <p className='text-end w-full '>New User? <Link href={"/Login"} className='link link-hover text-blue-500'>Login</Link></p>
                </div>

            </form>

        </div>
    );
};

export default page;