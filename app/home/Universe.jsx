import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Universe = () => {
    return (
        <>
            <div className="bg-black relative">
                <div className="w-10/12 mx-auto">
                    <div className="w-full pt-[120px] pl-[84px] pr-[108px] pb-[108px] bg-[url('/image/unimgg.png')] bg-cover bg-center ">
                        <div className="w-full h-0.5 bg-linear-to-r from-[#E03609] to-[#F0B71F]  absolute top-0 left-0">
                        </div>
                        <div className="absolute h-0.5 w-full left-0 bottom-0 bg-linear-to-b from-[#E03609] to-[#F0B71F]"></div>
                        <div className="flex">
                            <div className="w-2/3">
                                <h2 className="font-bold text-[75px] text-white leading-tight">
                                    Greetings! Dive<br />into the Cybernetic Universe
                                </h2>
                                <p className="pt-20 font-medium text-[#DDDDDD] text-[18px]">
                                    Our website is your gateway to a universe of neon lights, gritty
                                    streets, and <br />
                                    cybernetic enhancements. Explore the high-tech, low-life world
                                    where the lines <br />
                                    between humanity and machinery blur.
                                </p>
                            </div>

                            <div className="w-1/3 flex justify-end">
                                <div className="w-[320px] backdrop-blur-md bg-white/10 border border-yellow-500 rounded-xl p-6 shadow-lg">
                                    <div className="pt-7 pl-6 pr-8">
                                        <div className="flex items-center justify-between cursor-pointer transition">
                                            <div className="flex items-center gap-3">
                                                <span className="w-3 h-3 bg-yellow-400 "></span>
                                                <p className="text-white font-semibold text-[24px]">Join The Revolution</p>
                                            </div>
                                            <FiArrowRight className="text-white text-[30px]" />
                                        </div>
                                        <div className="flex items-center justify-between cursor-pointer  transition mt-4">
                                            <div className="flex items-center gap-3">
                                                <span className="w-3 h-3 bg-[#E03609] "></span>
                                                <p className="text-white font-semibold text-[24px]">Art and Design</p>
                                            </div>
                                            <FiArrowRight className="text-white text-[30px]" />
                                        </div>
                                        <div className="flex items-center justify-between cursor-pointer  transition mt-4">
                                            <div className="flex items-center gap-3">
                                                <span className="w-3 h-3 bg-yellow-400 "></span>
                                                <p className="text-white font-semibold text-[24px]">Tech and Gear</p>
                                            </div>
                                            <FiArrowRight className="text-white text-[30px]" />
                                        </div>
                                        <div className="flex items-center justify-between cursor-pointer  transition mt-4">
                                            <div className="flex items-center gap-3">
                                                <span className="w-3 h-3 bg-[#E03609] "></span>
                                                <p className="text-white font-semibold text-[24px]">Stories and Lore</p>
                                            </div>
                                            <FiArrowRight className="text-white text-[30px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-[30px] right-[122px]">
                    <img src="/image/u.png" alt="u" />
                </div>
                <div className="absolute -top-[30px] left-[122px]">
                    <img src="/image/ut.png" alt="u" />
                </div>
            </div>
        </>
    );
};

export default Universe;
