'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextPressure from '../blitz/text';
import CurvedLoop from '../blitz/slideText';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <main className="relative bg-primary pt-10 pb-0 sm:pb-10" id="about">
        <div className=" flex items-center bg-primary">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 py-12">
              
              {/* Left Content */}
              <div 
                className="w-full lg:w-1/2 text-center lg:text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div id="title" className="w-full">
                  {/* Text with TextPressure or fallback */}
                  <div className="">
                    <TextPressure
                      text="Aamir Almani"
                      flex={true}
                      alpha={false}
                      stroke={false}
                      width={true}
                      weight={true}
                      italic={true}
                      textColor="#ffffff"
                      strokeColor="#ff0000"
                    />
                  </div>
                  {/* <div className="block sm:hidden mb-2">
                    <span className="text-blue-500 font-extrabold text-4xl xs:text-5xl leading-tight">
                      Aamir Almani
                    </span>
                  </div> */}
                  <h1 
                    className="text-white font-body font-semibold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-snug md:leading-tight mt-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Full Stack Developer based in Pakistan.
                  </h1>
                </div>
              </div>

              {/* Right Image */}
             {/* Right Image with Tilt (no card background) */}
<div 
  className="w-full lg:w-1/2 flex justify-center"
  data-aos="fade-left"
  data-aos-delay="400"
>
  <Tilt
    options={{
      max: 25,
      scale: 1,
      speed: 450,
    }}
    className="rounded-full"
  >
    <div className="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
      <Image 
        src="/assets/img/profile.png" 
        alt="Aamir Almani"
        fill
        className="object-cover rounded-full shadow-2xl"
        priority
      />
    </div>
  </Tilt>
</div>

            </div>
          </div>
        </div>
      </main>
      {/* Scroll Down Animation */}
<div className="pb-20 pt-10 md:pt-15 w-full flex justify-center bg-primary items-center mt-[-40px] sm:mt-[-20px] md:mt-[-10px] lg:mt-0">
  <Image
    src="/assets/img/scroll.gif" // make sure this path is correct
    alt="Scroll Down"
    width={50}
    height={50}
    className="animate-bounce"
    priority
  />
</div>

      {/* Curved Marquee Text */}
      <CurvedLoop
        marqueeText="MERN Stack Developer ✦ Android Developer ✦ NextJS Developer ✦ Graphic Designer ✦ Project Manager ✦"
        speed={3}
        curveAmount={0}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />
    </>
  );
};

export default Hero;
