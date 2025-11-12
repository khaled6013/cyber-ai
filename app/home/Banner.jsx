import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="lg:py-15 py-6 bg-[#010101]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="">
            <h2 className='text-center font-bold lg:text-[160px] text-[60px] text-white '>Cyber Punk</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <h3 className='font-semibold text-white text-[24px] '>Stories & Lore</h3>
              <p className='font-medium text-[#DDDDDD] pt-3'>Dive into compelling narratives <br></br> set in a dystopian future.</p>
            </div>
            <div className="">
              <img src="/image/banOne.png" alt="banOne" />
            </div>
            <div className="">
              <h2 className='font-normal text-[36px] Uppercase text-white'>Events and</h2>
              <h2 className='font-semibold text-[36px] uppercase text-white'>Updates</h2>
              <div className="">
                <a className='py-3 px-6 text-white text-[16px] font-semibold bg-red-700 cursor-pointer'>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner