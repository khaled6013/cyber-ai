"use client";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative bg-[#010101] py-10 overflow-visible">
        <div className="w-11/12 lg:w-10/12 mx-auto relative px-14">
          <h2 className="text-center font-bold text-white lg:text-[190px] text-[60px] leading-[0.8]">
            Cyber Punk
          </h2>
          <img
            src="/image/banOne.png"
            alt="Cyber Hero"
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[780px] h-[700px] object-cover z-0"
          />
        </div>
        <div className="w-11/12 lg:w-10/12 mx-auto mt-[180px] relative flex justify-between items-start z-20 px-14">
          <div>
            <h3 className="font-semibold text-white text-[24px]">Stories & Lore</h3>
            <p className="font-medium text-[#DDDDDD] pt-3">
              Dive into compelling narratives <br /> set in a dystopian future.
            </p>
          </div>
          <div className="text-right">
            <h2 className="font-normal text-[36px] uppercase text-white">Events and</h2>
            <h2 className="font-semibold text-[36px] uppercase text-white">Updates</h2>
            <p className="font-medium text-[#DDDDDD] text-[18px] pt-7">
              Explore the high-tech, low-life world <br />
              where the lines between humanity <br />
              and machinery blur.
            </p>

            <button className="mt-10 py-3 px-6 text-white text-[16px] font-semibold bg-linear-to-r from-[#F0B71F] to-[#E03609] rounded-lg">
              Read More
            </button>
          </div>
        </div>
        <div className="w-11/12 lg:w-10/12 mx-auto mt-[100px] flex justify-between items-start px-14">
          <div className="px-8 py-6 backdrop-blur-[51px] bg-white/10 rounded-xl border border-[#E03609]/50">
            <div className="flex items-center">
              <img src="/image/banTwo.png" alt="Card Image" className="w-[90px]" />

              <div className="ml-6">
                <h2 className="font-semibold text-[56px] text-transparent bg-clip-text bg-linear-to-r from-[#E03609] to-[#F0B71F]">
                  76,285K+
                </h2>
                <h4 className="font-normal text-[28px] text-white">Experience the Future</h4>
                <p className="font-medium text-[#DDDDDD] pt-3">
                  Explore the high-tech, low-life world <br />
                  where the lines between
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-[36px] font-normal text-white uppercase">Art and</h2>
            <h2 className="text-[36px] font-semibold text-white uppercase">Design</h2>
            <p className="font-medium text-[#DDDDDD] pt-8">
              Feast your eyes on stunning <br />
              visuals and concept art that <br />
              bring the cyberpunk
            </p>
          </div>
          <div className="px-8 py-6 backdrop-blur-[51px] bg-white/10 rounded-xl border border-[#E03609]/50 mt-10">
            <h2 className="font-semibold text-[56px] text-transparent bg-clip-text bg-linear-to-r from-[#E03609] to-[#F0B71F]">
              17+
            </h2>
            <h4 className="font-medium text-white text-[27px] leading-tight">
              Years of <br /> Experiences
            </h4>
          </div>
        </div>
        <div className="absolute top-0 left-35 h-full w-0.5 bg-linear-to-b from-[#E03609] to-[#F0B71F]"></div>
        <div className="absolute top-0 right-35 h-full w-0.5 bg-linear-to-b from-[#F0B71F] to-[#E03609]"></div>
        <div className="absolute -top-8 right-[110px]">
          <img src="/image/u.png" alt="u" />
        </div>
        <div className="absolute -top-8 left-[110px]">
          <img src="/image/ut.png" alt="u" />
        </div>
      </div>
    </>
  );
};

export default Banner;
