import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="py-10 bg-black relative">
                <div className="w-full h-0.5 bg-linear-to-l from-[#E03609] to-[#F0B71F]  absolute top-0 left-0">
                </div>
                <div className="w-11/12 lg:w-10/12 mx-auto px-14">
                    <div className="flex items-center">
                        <div className="w-3/6">
                            <h2 className="font-semibold text-white text-[22px]">Cyber.AI - Cyber Punk Website</h2>
                            <p className='text-[#DDDDDD] text-[16px] pt-7'>Explore the high-tech, low-life world where the lines<br></br> between humanity </p>
                        </div>
                        <div className="w-1/6">
                            <h2 className="font-semibold text-white text-[22px]">Information</h2>
                            <p className='text-[#DDDDDD] text-[16px] pt-7'>Press Centre</p>
                            <p className='text-[#DDDDDD] text-[16px] '>Our Blog</p>
                            <p className='text-[#DDDDDD] text-[16px] '>Term and Condition</p>
                        </div>
                        <div className="w-1/6">
                            <h2 className="font-semibold text-white text-[22px]">Menu</h2>
                            <p className='text-[#DDDDDD] text-[16px] pt-7'>About</p>
                            <p className='text-[#DDDDDD] text-[16px] '>Services</p>
                            <p className='text-[#DDDDDD] text-[16px] '>Blog</p>
                        </div>
                        <div className="w-1/6">
                            <h2 className="font-semibold text-white text-[22px]">Contact</h2>
                            <p className='text-[#DDDDDD] text-[16px] pt-7'>Phone : +123 456 789</p>
                            <p className='text-[#DDDDDD] text-[16px] '>Email   : @example.com</p>
                            <p className='text-[#DDDDDD] text-[16px] '>Address Line 01</p>
                        </div>
                    </div>
                    <div className="flex mt-20 items-center">
                        <div className="w-3/6">
                            <h2 className="font-medium text-white text-[18px]">Cyber.AI - Cyber Punk Website</h2>
                        </div>
                        <div className="w-3/6">
                            <div className="flex items-center justify-between">
                                <ul className='flex items-center gap-x-10'>
                                    <li>
                                        <a href="" className="font-medium text-white text-[18px]">Terms</a>
                                    </li>
                                    <li>
                                        <a href="" className="font-medium text-white text-[18px]">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="" className="font-medium text-white text-[18px]">Cookies</a>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-x-6">
                                    <ul className='flex items-center gap-x-6'>
                                        <li>
                                            <a href="#" className='text-white'><FaLinkedinIn /></a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-white'><FaFacebookF /></a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-white '><FaTwitter /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-[30px] right-[122px]">
                    <img src="/image/ut.png" alt="u" />
                </div>
                <div className="absolute -top-[30px] left-[122px]">
                    <img src="/image/u.png" alt="u" />
                </div>
            </div>
        </>
    )
}

export default Footer