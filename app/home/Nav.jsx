"use client";

import React, { useState } from 'react'
const Nav = () => {
    let [open, setOpen] = useState(false)
    return (
        <div className="bg-black pt-10 relative">
            <div className="w-10/12 mx-auto px-14 ">
                <div className="lg:flex items-center justify-between ">
                    <div className="">
                        <img src="/image/logo.png" alt="logo" />
                    </div>
                    <div className="">
                        <ul className='gap-x-9 lg:flex items-center'>
                            <li>
                                <a className='text-[16px] text-white font-medium'>Home</a>
                            </li>
                            <li>
                                <a className='text-[16px] text-white font-medium'>Pages</a>
                            </li>
                            <li>
                                <a className='text-[16px] text-white font-medium'>Support</a>
                            </li>
                            <li>
                                <a className='text-[16px] text-white font-medium'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <a onClick={() => setOpen(!open)} className='text-[17px] font-bold text-white py-3 px-5 bg-linear-to-r from-[#F0B71F] to-[#E03609] cursor-pointer rounded-lg'>Get started free</a>
                    </div>
                </div>
                <div className="absolute top-0 left-35 h-full w-0.5 bg-linear-to-b from-[#E03609] to-[#F0B71F]"></div>
                <div className="absolute top-0 right-35 h-full w-0.5 bg-linear-to-b from-[#F0B71F] to-[#E03609]"></div>
            </div>
            <div className="w-full h-0.5 bg-linear-to-r from-[#E03609] to-[#F0B71F] mt-15 ">
            </div>
        </div>
    )
}

export default Nav