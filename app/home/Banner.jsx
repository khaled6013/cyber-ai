"use client"
import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="py-2 bg-[#010101]">
        <div className="lg:w-10/12 w-11/12 mx-auto px-10 relative">
          <div className="">
            <h2 className='text-center font-bold lg:text-[190px] text-[60px] text-white '>Cyber Punk</h2>
          </div>
          <div className="flex items-center justify-between mt-[120px]">
            <div className="">
              <h3 className='font-semibold text-white text-[24px] '>Stories & Lore</h3>
              <p className='font-medium text-[#DDDDDD] pt-3'>Dive into compelling narratives <br></br> set in a dystopian future.</p>
            </div>
            <div className="absolute top-29 left-[30%]">
              <img src="/image/banOne.png" alt="banOne" className='w-[750px] h-[700px]' />
            </div>
            <div className="">
              <h2 className='font-normal text-[36px] Uppercase text-white text-end'>Events and</h2>
              <h2 className='font-semibold text-[36px] uppercase text-white text-end'>Updates</h2>
              <p className='font-medium text-[#DDDDDD] text-[18px] pt-11 text-end'>Explore the high-tech, low-life world <br></br> where the lines between humanity<br></br> and machinery blur.</p>
              <div className="text-end mt-13">
                <a className='py-3 px-6 text-white text-[16px] font-semibold bg-linear-to-r from-[#F0B71F] to-[#E03609] cursor-pointer rounded-lg'>Read More</a>
              </div>
            </div>
          </div>
          <div className="py-2 bg-black w-full">
            <div className="flex justify-between items-center">
              <div className="px-8 py-6 backdrop-blur-[51.4px] bg-white/10 rounded-xl border-amber-700 border-2">
                <div className="flex  items-center">
                  <div className="">
                    <img src="/image/banTwo.png" alt="banTwo" />
                  </div>
                  <div className="ml-6">
                    <h2 className='font-semibold text-[56px] text-transparent bg-clip-text bg-linear-to-r from-[#E03609] to-[#F0B71F]'>76,285K+</h2>
                    <h4 className='font-normal text-[28px] text-white'>Experience the Future</h4>
                    <p className='font-medium text-[#DDDDDD] pt-3'>Explore the high-tech, low-life world<br></br> where the lines between</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className='text-[36px] font-normal text-white'>Art and</h2>
                <h2 className='text-[36px] font-semibold text-white'> Design</h2>
                <p className='font-medium text-[#DDDDDD] pt-8'>Feast your eyes on stunning<br>
                </br> visuals and concept art that<br>
                  </br> bring the cyberpunk</p>
              </div>
              <div className="p-6 backdrop-blur-[51.4px] bg-white/10 rounded-xl border-amber-700 border-2">
                <h2 className='font-semibold text-[56px] text-transparent bg-clip-text bg-linear-to-r from-[#E03609] to-[#F0B71F]'>17+</h2>
                <h4 className='font-medium text-white text-[27px]'>Years of<br></br> Experiences</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner