import React from 'react'
import Image from 'next/image'
import logo from '@/assest/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import companyName from '@/assest/Group 5.png'


const Footer = () => {
  return (
    <div className='bg-[#555555] flex flex-col sm:flex-row items-center gap-x-20 gap-y-3 sm:h-[250px] p-10'>
        <div className='flex flex-col gap-y-5 items-center pl-2  '>
            <div className='flex gap-x-2'>
                <Image src={logo} alt='company logo'  width={60} height={30}/>
                <Image src={companyName} alt="company name" className='w-auto h-auto object-contain ' />
            </div>
            <div className='flex gap-x-2 mx-auto'>
             <FaSquareFacebook className='text-[#F4F4F49E]' />
             <FaInstagram  className='text-[#F4F4F49E]' />
             <FaXTwitter className='text-[#F4F4F49E]'  />
            </div>
        </div>
        <div className='sm:flex grid grid-cols-2 items-center gap-x-40 sm:pl-20 gap-y-5'>
            <div className='flex flex-col gap-y-3 mt-2 sm:mt-0' >
                <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>company</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>about us</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>careers</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>press</a>
            </div>
            <div className='flex flex-col gap-y-3' >
                <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>product</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>features</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>pricing</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>reviews</a>
            </div>
            <div className='flex flex-col gap-y-3' >
                <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>support</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>help center</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>contact us</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>privacy policy</a>
            </div>
            <div className='flex flex-col gap-y-3' >
                <a href='#' className='text-white capitalize cursor-pointer text-[12px]'>social</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>twitter</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>LinkedIn</a>
                <a href='#' className='text-[#F4F4F49E] cursor-pointer capitalize text-[12px]'>facebook</a>
            </div>

        </div>

    </div>
  )
}

export default Footer