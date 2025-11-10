import React from 'react'
import Image from "next/image";

const Nav = () => {
    return (
        <div className="bg-black py-10">
            <div className="w-10/12 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="">
                        <img src="/image/logo.png" alt="logo" />
                    </div>
                    <div className="">
                        <ul className='gap-x-9 flex items-center'>
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
                        <a className='text-[17px] font-bold text-white py-3 px-5 bg-linear-to-r from-[#F0B71F] to-[#E03609] cursor-pointer rounded-[8px]'>Get started free</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav