import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/svgs/logo.svg";

const Hero = () => {
  return (
    <section className="h-[100vh] w-full flex justify-center items-center px-6 sm:px-14 md:px-24 overflow-hidden bg-black text-white">
      <div className="w-full max-w-7xl">
        <div className="w-full flex justify-center items-center">
          <div className="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
            <div className="w-full flex flex-col gap-10">
              <Image src={Logo} alt="" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-left font-extrabold tracking-[-3.52px] leading-[100%] font-lausanne">pronounced as paan-daah.</h1>
              <div className="flex flex-col gap-6 font-lausannelight">
              <div>
                <p className="max-w-md leading-[150%]">
                  A human driven by storytelling & visual craft. Currently
                  designing at Verloop, previously at Tartan.
                </p>
              </div>
              <div className="h-[1px] bg-[#525252]"/>
              <div>
                <p className="max-w-md text-[#898989] leading-[150%]">
                My 2025 portfolio is under construction—while that’s happening, you can find me on LinkedIn, or say hellopaandaa@gmail.com
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
