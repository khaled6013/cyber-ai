import React from 'react'

const Dive = () => {
  return (
    <>
      <div className="py-20 bg-black relative">
        <div className="w-11/12 lg:w-10/12 mx-auto px-14">
          <div className="text-center mt-5">
            <h2 className='font-bold text-white text-[55px]'>Dive into the Cybernetic</h2>
            <h2 className='text-[55px] font-bold text-transparent bg-clip-text bg-linear-to-r from-[#E03609] to-[#F0B71F]'>Universe</h2>
            <p className='text-[18px] font-medium text-[#DDDDDD] pt-[37px] lg:w-[936px] mx-auto'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
          </div>
          <div className="flex items-center justify-between mt-16 gap-10">
            <div className="w-1/3 flex items-center gap-8">
              <div className="p-0.5 rounded-xl bg-linear-to-r from-[#E03609] to-[#F0B71F] w-20 h-20 flex items-center justify-center">
                <div className="bg-black rounded-xl w-full h-full flex items-center justify-center">
                  <img src="/image/mitre.png" alt="diveTwo" className='w-10' />
                </div>
              </div>

              <div className="">
                <h2 className='font-medium text-white text-[28px]'>Discover the Future</h2>
                <p className='font-medium text-[#DDDDDD] text-[15px] pt-4'>Explore the high-tech, low-life world where the lines between humanity </p>
              </div>
            </div>
            <div className="w-1/3 flex items-center gap-8">
              <div className="p-0.5 rounded-xl bg-linear-to-r from-[#E03609] to-[#F0B71F] w-20 h-20 flex items-center justify-center">
                <div className="bg-black rounded-xl w-full h-full flex items-center justify-center">
                  <img src="/image/feature_search.png" alt="diveTwo" className='w-10' />
                </div>
              </div>

              <div className="">
                <h2 className='font-medium text-white text-[28px]'>Discover the Future</h2>
                <p className='font-medium text-[#DDDDDD] text-[15px]] pt-4'>Explore the high-tech, low-life world where the lines between humanity </p>
              </div>
            </div>
            <div className="w-1/3 flex items-center gap-8">
              <div className="p-0.5 rounded-xl bg-linear-to-r from-[#E03609] to-[#F0B71F] w-20 h-20 flex items-center justify-center">
                <div className="bg-black rounded-xl w-full h-full flex items-center justify-center">
                  <img src="/image/cable.png" alt="diveTwo" className='w-10' />
                </div>
              </div>

              <div className="">
                <h2 className='font-medium text-white text-[28px]'>Discover the Future</h2>
                <p className='font-medium text-[#DDDDDD] text-[15px] pt-4'>Explore the high-tech, low-life world where the lines between humanity </p>
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

export default Dive